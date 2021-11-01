import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { usePosts } from '@hooks/usePosts';

export default function Admin() {
  const { data, isLoading, isFetching, error } = usePosts();

  return (
    <div>
      <h1>Admin</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        voluptatum.
      </p>
      {isLoading ? (
        'Carregando...'
      ) : (
        <div>
          {data?.map((post) => {
            return (
              <div key={post._id}>
                <p>{post.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSideProps) {
  const { token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    nookies.destroy(ctx, 'token');

    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}
