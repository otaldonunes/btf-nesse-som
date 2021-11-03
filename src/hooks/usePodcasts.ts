import { useQuery } from 'react-query';
import { api } from '@services/api';
import { dateFormat } from '@utils/dateFormat';

interface podcastsProps {
  data: Podcast[];
}

type Podcast = {
  data: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    src: string;
    createdAt: string;
    updatedAt?: string;
    tags: Array<string>;
  };
};

export async function getPodcasts() {
  const { data }: podcastsProps = await api.get('/api/podcasts');

  const podcasts = data
    .map((element) => element.data)
    .map((podcast) => {
      if (podcast.updatedAt) {
        return {
          _id: podcast._id,
          title: podcast.title,
          slug: podcast.slug,
          description: podcast.description,
          src: podcast.src,
          createdAt: dateFormat(podcast.createdAt),
          updatedAt: dateFormat(podcast.updatedAt),
          tags: podcast.tags,
        };
      }

      return {
        _id: podcast._id,
        title: podcast.title,
        slug: podcast.slug,
        description: podcast.description,
        src: podcast.src,
        createdAt: dateFormat(podcast.createdAt),
        tags: podcast.tags,
      };
    });

  return podcasts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export function usePodcasts() {
  return useQuery('podcasts', getPodcasts, {
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
  });
}
