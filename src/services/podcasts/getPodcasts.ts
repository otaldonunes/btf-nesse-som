import { Documents, query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { validateSlug } from '@utils/validateSlug';

interface podcastsData {
  data: podcastProps[];
}

interface podcastProps {
  readonly _id: string;
  title: string;
  readonly slug: string;
  description: string;
  src: string;
  readonly createdAt: string;
  updatedAt?: string;
  tags: Array<string>;
}

export async function getPodcasts(
  slug?: string | string[],
): Promise<podcastProps[]> | Promise<podcastProps> {
  if (!slug) {
    const podcasts: podcastsData = await fauna.query(
      q.Map(
        q.Paginate(Documents(q.Collection('podcasts'))),
        q.Lambda('x', q.Get(q.Var('x'))),
      ),
    );

    return podcasts.data;
  }

  await validateSlug(slug);

  try {
    const podcast: podcastProps = await fauna.query(
      q.Get(q.Match(q.Index('podcast_by_slug'), slug)),
    );

    return podcast;
  } catch {
    throw new Error('Podcast not found');
  }
}
