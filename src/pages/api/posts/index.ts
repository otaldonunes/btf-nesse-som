import { NextApiRequest, NextApiResponse } from 'next';
import { Documents, query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import slugify from 'react-slugify';

interface postsData {
  data: postProps;
}

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

  const getAllPosts = async (res: NextApiResponse) => {
    try {
      const posts: postsData = await fauna.query(
        q.Map(
          q.Paginate(Documents(q.Collection('posts'))),
          q.Lambda('x', q.Get(q.Var('x'))),
        ),
      );

      return res.status(200).json(posts.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

  const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
    validateToken(req, res);

    const { title, content, author, tags }: postProps = req.body;

    if (!title || !content || !author || !tags) {
      return res.status(400).json({ message: 'Bad Request' });
    }

    try {
      const post: postsData = {
        data: {
          _id: uuidv4(),
          title,
          slug: slugify(title),
          content,
          author,
          createdAt: format(new Date(), 'T', { locale: ptBR }),
          tags,
        },
      };

      await fauna.query(q.Create(q.Collection('posts'), post));

      return res.status(201).json(post.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
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
