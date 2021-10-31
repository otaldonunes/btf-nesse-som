import slugify from 'react-slugify';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { validatePostData } from '@utils/validatePostData';
import { validateSlug } from '@utils/validateSlug';

interface postsData {
  data: postProps;
}

interface postProps {
  title: string;
  slug: string | string[];
  content: HTMLElement;
  author: string;
  updatedAt?: string;
  tags: Array<string>;
}

export async function updatePostById(
  slug: string,
  title: string,
  content: HTMLElement,
  author: string,
  tags: Array<string>,
): Promise<postsData> {
  await validatePostData(title, content, author, tags);
  await validateSlug(slug);

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

  return post;
}
