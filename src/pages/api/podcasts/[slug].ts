import { NextApiRequest, NextApiResponse } from 'next';
import { validateToken } from '@utils/validateToken';
import { getPodcasts } from '@services/podcasts/getPodcasts';
import { updatePodcastById } from '@services/podcasts/updatePodcastById';
import { deletePodcastById } from '@services/podcasts/deletePodcastById';

interface reqProps {
  title: string;
  description: string;
  src: string;
  tags: Array<string>;
  image: string;
}

export default async function handlerPodcasts(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  const getPodcastById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;

    try {
      const podcast = await getPodcasts(slug);

      return res.status(200).json(podcast.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  const updatePodcast = async (req: NextApiRequest, res: NextApiResponse) => {
    const { title, description, src, tags, image }: reqProps = req.body;
    const { authorization } = req.headers;
    const { slug }: { slug?: string | string[] } = req.query;

    try {
      validateToken(authorization);

      try {
        const updatedPodcast = await updatePodcastById(
          slug,
          title,
          description,
          src,
          tags,
          image,
        );

        return res.status(201).json(updatedPodcast.data);
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  };

  const deletePodcast = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers;
    const { slug } = req.query;

    try {
      validateToken(authorization);

      try {
        const deletedPodcast = await deletePodcastById(slug);

        return res.status(200).json(deletedPodcast.data);
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  switch (method) {
    case 'GET':
      return getPodcastById(req, res);
    case 'PUT':
      return updatePodcast(req, res);
    case 'DELETE':
      return deletePodcast(req, res);
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
