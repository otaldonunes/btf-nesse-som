import { NextApiRequest, NextApiResponse } from 'next';
import { query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import jwt from 'jsonwebtoken';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import slugify from 'react-slugify';

interface postsData {
  data: postProps;
}

interface postProps {
  title: string;
  slug: string;
  content: HTMLElement;
  author: string;
  updatedAt?: string;
  tags: Array<string>;
}

export default async function handlerPosts(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  const validateToken = (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    try {
      jwt.verify(authorization, process.env.JWT_SECRET);
    } catch {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
  };

  const getPostById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;

    if (!slug) {
      return res.status(400).json({
        message: 'Bad Request',
      });
    }

    try {
      const post: postsData = await fauna.query(
        q.Get(q.Match(q.Index('post_by_slug'), slug)),
      );
      return res.status(200).json(post.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  const updatePost = async (req: NextApiRequest, res: NextApiResponse) => {
    validateToken(req, res);

    const { slug } = req.query;

    if (!slug) {
      return res.status(400).json({
        message: 'Bad Request',
      });
    }

    const { title, content, author, tags }: postProps = req.body;

    if (!title || !content || !author || !tags) {
      return res.status(400).json({ message: 'Bad Request' });
    }

    try {
      const post: postsData = {
        data: {
          title,
          slug: slugify(title),
          content,
          author,
          updatedAt: format(new Date(), 'T', { locale: ptBR }),
          tags,
        },
      };

      await fauna.query(q.Update(q.Ref(q.Collection('posts'), slug), post));

      return res.status(200).json(post.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  const deletePost = async (req: NextApiRequest, res: NextApiResponse) => {
    validateToken(req, res);

    const { slug } = req.query;

    if (!slug) {
      return res.status(400).json({
        message: 'Bad Request',
      });
    }

    try {
      const post: postsData = await fauna.query(
        q.Delete(q.Ref(q.Collection('posts'), slug)),
      );

      return res.status(200).json(post.data);
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
