import { Documents, query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { validateSlug } from '@utils/validateSlug';

interface postsData {
  data: postProps[];
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

export async function getPosts(
  slug?: string | string[],
): Promise<postProps[]> | Promise<postProps> {
  if (!slug) {
    const posts: postsData = await fauna.query(
      q.Map(
        q.Paginate(Documents(q.Collection('posts'))),
        q.Lambda('x', q.Get(q.Var('x'))),
      ),
    );

    return posts.data;
  }

  await validateSlug(slug);

  try {
    const post: postsData = await fauna.query(
      q.Get(q.Match(q.Index('post_by_slug'), slug)),
    );

    return post.data;
  } catch {
    throw new Error('Post not found');
  }
}
