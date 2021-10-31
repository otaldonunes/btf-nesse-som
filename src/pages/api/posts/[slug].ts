import { NextApiRequest, NextApiResponse } from 'next';
import { validateToken } from '@utils/validateToken';
import { getPosts } from '@services/posts/getPosts';
import { updatePostById } from '@services/posts/updatePostById';
import { deletePostById } from '@services/posts/deletePostById';

interface postsData {
  data: postProps;
}

interface reqProps {
  title: string;
  content: string;
  author: string;
  tags: Array<string>;
}

export default async function handlerPosts(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  const getPostById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;

    try {
      const post = await getPosts(slug);

      return res.status(200).json(post.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  const updatePost = async (req: NextApiRequest, res: NextApiResponse) => {
    const { title, content, author, tags }: reqProps = req.body;
    const { authorization } = req.headers;
    const { slug }: { slug?: string | string[] } = req.query;

    try {
      validateToken(authorization);

      try {
        const updatedPost = await updatePostById(
          slug,
          title,
          content,
          author,
          tags,
        );

        return res.status(201).json(updatedPost.data);
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    } catch (err) {
      return res.status(401).json({ message: err.message });
    }
  };

  const deletePost = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers;
    const { slug } = req.query;

    try {
      validateToken(authorization);

      try {
        const deletedPost = await deletePostById(slug);

        return res.status(200).json(deletedPost.data);
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  switch (method) {
    case 'GET':
      return getPostById(req, res);
    case 'PUT':
      return updatePost(req, res);
    case 'DELETE':
      return deletePost(req, res);
    default:
      return res.status(405).json({ message: 'Method not allowed' });
  }
}
