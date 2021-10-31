import { query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { validateSlug } from '@utils/validateSlug';

export async function deletePostById(
  slug: string | string[],
): Promise<{}> | never {
  await validateSlug(slug);

  try {
    const deletedPost = await fauna.query(
      q.Delete(q.Match(q.Index('post_by_slug'), slug)),
    );

    return deletedPost;
  } catch {
    throw new Error('Post not found');
  }
}
