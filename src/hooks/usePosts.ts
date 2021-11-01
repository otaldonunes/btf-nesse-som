import { useQuery } from 'react-query';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { api } from '@services/api';

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
          createdAt: format(new Date(Number(post.createdAt)), 'Pp', {
            locale: ptBR,
          }),
          updatedAt: format(new Date(Number(post.updatedAt)), 'Pp', {
            locale: ptBR,
          }),
          tags: post.tags,
        };
      }

      return {
        _id: post._id,
        title: post.title,
        slug: post.slug,
        content: post.content,
        author: post.author,
        createdAt: format(new Date(Number(post.createdAt)), 'Pp', {
          locale: ptBR,
        }),
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
