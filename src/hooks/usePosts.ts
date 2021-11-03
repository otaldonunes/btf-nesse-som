import { useQuery } from 'react-query';
import { api } from '@services/api';
import { dateFormat } from '@utils/dateFormat';

interface postProps {
  data: Post[];
}

type Post = {
  data: {
    _id: string;
    title: string;
    slug: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt?: string;
    tags: Array<string>;
  };
};

export async function getUsers() {
  const { data }: postProps = await api.get('/api/posts');

  const posts = data
    .map((element) => element.data)
    .map((post) => {
      if (post.updatedAt) {
        return {
          _id: post._id,
          title: post.title,
          slug: post.slug,
          content: post.content,
          author: post.author,
          createdAt: dateFormat(post.createdAt),
          updatedAt: dateFormat(post.updatedAt),
          tags: post.tags,
        };
      }

      return {
        _id: post._id,
        title: post.title,
        slug: post.slug,
        content: post.content,
        author: post.author,
        createdAt: dateFormat(post.createdAt),
        tags: post.tags,
      };
    });

  return posts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export function usePosts() {
  return useQuery('posts', getUsers, {
    staleTime: 1000 * 60 * 60 * 12, // 12 hours
  });
}
