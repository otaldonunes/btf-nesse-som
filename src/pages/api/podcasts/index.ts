import { NextApiRequest, NextApiResponse } from 'next';
import { validateToken } from '@utils/validateToken';
import { insertPodcast } from '@services/podcasts/insertPodcast';
import { getPodcasts } from '@services/podcasts/getPodcasts';

interface podcastsProps {
  readonly _id: string;
  title: string;
  readonly slug: string;
  description: string;
  src: string;
  readonly createdAt: string;
  updatedAt?: string;
  tags: Array<string>;
  image: string;
}

export default async function handlerPodcasts(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  const getAllPodcasts = async (res: NextApiResponse) => {
    try {
      const podcasts = await getPodcasts();

      return res.status(200).json(podcasts);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  const createPodcast = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers;
    const { title, description, src, tags, image }: podcastsProps = req.body;

    try {
      validateToken(authorization);

      try {
        const newPodcast = await insertPodcast(
          title,
          description,
          src,
          tags,
          image,
        );

        return res.status(201).json(newPodcast.data);
      } catch (err) {
        return res.status(400).json({ message: err.message });
      }
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  };

  switch (method) {
    case 'GET':
      return getAllPodcasts(res);
    case 'POST':
      return createPodcast(req, res);
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
