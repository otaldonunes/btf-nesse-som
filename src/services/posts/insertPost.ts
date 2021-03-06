import slugify from 'react-slugify';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { validatePostData } from '@utils/validatePostData';
import { cloudinary } from '@services/cloudinary';

interface postsData {
  data: postProps;
}

interface postProps {
  readonly _id: string;
  title: string;
  readonly slug: string;
  content: string;
  author: string;
  readonly createdAt: string;
  updatedAt?: string;
  tags: Array<string>;
  image: string;
}

export async function insertPost(
  title: string,
  content: string,
  author: string,
  tags: Array<string>,
  image: string,
): Promise<postsData> {
  await validatePostData(title, content, author, tags, image);

  const post: postsData = {
    data: {
      _id: uuidv4(),
      title,
      slug: slugify(title),
      content,
      author,
      createdAt: format(new Date(), 'T', { locale: ptBR }),
      tags,
      image: await cloudinary(image),
    },
  };

  await fauna.query(q.Create(q.Collection('posts'), post));

  return post;
}
