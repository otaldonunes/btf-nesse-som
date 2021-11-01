import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { usePosts } from '@hooks/usePosts';
import React, { useState } from 'react';
import { Container, Content, DrawerContent } from './styles';
import bg1 from '@assets/images/bg1.svg';
import 'react-modern-drawer/dist/index.css';
import { RiMenuFill } from 'react-icons/ri';
import { DrawerMenu } from '@components/Adm/DrawerMenu';

export default function Admin() {
  const { data, isLoading, isFetching, error } = usePosts();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <Container>
      {!isDrawerOpen ? (
        <button type="button" className="hamburguer">
          <RiMenuFill color="#FFFFFF" size="2rem" onClick={toggleDrawer} />
        </button>
      ) : null}
      <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Content>
        <div>
          <p>
            Olá, <span>Admin</span>!
          </p>
          <img
            src={bg1}
            alt="Pra cego ver: Ilustração de um garoto usando um notebook."
          />
        </div>
      </Content>
    </Container>
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
