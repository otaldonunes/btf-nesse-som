import slugify from 'react-slugify';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { validatePostData } from '@utils/validatePostData';
import { validateSlug } from '@utils/validateSlug';

type postsData = {
  data: postProps[];
};

interface postProps {
  title: string;
  slug: string | string[];
  content: string;
  author: string;
  updatedAt?: string;
  tags: Array<string>;
  image: string;
}

export async function updatePostById(
  slug: string | string[],
  title: string,
  content: string,
  author: string,
  tags: Array<string>,
  image: string,
) {
  await validatePostData(title, content, author, tags, image);
  await validateSlug(slug);

  const post: postsData = {
    data: {
      title,
      slug: slugify(title),
      content,
      author,
      updatedAt: format(new Date(), 'T', { locale: ptBR }),
      tags,
      image,
    },
  };

  await fauna.query(
    q.Update(
      q.Select(['ref'], q.Get(q.Match(q.Index('post_by_slug'), slug))),
      post,
    ),
  );

  return post.data;
}
