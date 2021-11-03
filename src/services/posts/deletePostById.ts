import { query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { validateSlug } from '@utils/validateSlug';

interface postProps {
  data: {
    title: string;
    slug: string | string[];
    content: string;
    author: string;
    updatedAt?: string;
    tags: Array<string>;
    image: string;
  };
}

export async function deletePostById(
  slug: string | string[],
): Promise<postProps> {
  await validateSlug(slug);

  try {
    const deletedPost = await fauna.query(
      q.Delete(
        q.Select(['ref'], q.Get(q.Match(q.Index('post_by_slug'), slug))),
      ),
    );

    return deletedPost.data;
  } catch {
    throw new Error('Post not found');
  }
}
