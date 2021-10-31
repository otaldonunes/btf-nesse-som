import { NextApiRequest, NextApiResponse } from 'next';
import { validateToken } from '@utils/validateToken';
import { insertPost } from '@services/posts/insertPost';
import { getPosts } from '@services/posts/getPosts';

interface postProps {
  readonly _id: string;
  title: string;
  readonly slug: string;
  content: HTMLElement;
  author: string;
  readonly createdAt: string;
  updatedAt?: string;
  tags: Array<string>;
}

export default async function handlerPosts(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  const getAllPosts = async (res: NextApiResponse) => {
    try {
      const posts = await getPosts();

      return res.status(200).json(posts);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers;
    const { title, content, author, tags }: postProps = req.body;

    try {
      validateToken(authorization);

      try {
        const newPost = await insertPost(title, content, author, tags);

        return res.status(201).json(newPost.data);
      } catch (err) {
        return res.status(400).json({ message: err.message });
      }
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  };

  switch (method) {
    case 'GET':
      return getAllPosts(res);
    case 'POST':
      return createPost(req, res);
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
