import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

export default function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        voluptatum.
      </p>
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
