import slugify from 'react-slugify';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { validatePostData } from '@utils/validatePostData';

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

export async function insertPost(
  title: string,
  content: HTMLElement,
  author: string,
  tags: Array<string>,
): Promise<postsData> {
  await validatePostData(title, content, author, tags);

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

  return post;
}
