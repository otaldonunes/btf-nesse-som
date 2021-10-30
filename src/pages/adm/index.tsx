import { GetStaticProps } from 'next';
import nookies from 'nookies';

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

export async function getStaticProps(context: GetStaticProps) {
  const { token } = nookies.get(context);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
