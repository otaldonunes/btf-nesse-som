import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { usePosts } from '@hooks/usePosts';
import React, { useState } from 'react';
import { Container, Content } from './styles';
import 'react-modern-drawer/dist/index.css';
import { RiMenuFill } from 'react-icons/ri';
import { DrawerMenu } from '@components/Adm/DrawerMenu';
import { HeaderComponent } from '@components/Adm/HeaderComponent';
import { DataTable } from '@components/Adm/DataTable';

export default function AdminPosts() {
  const { data, isLoading, error } = usePosts();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <div className="container">
          <HeaderComponent
            title="Publicações"
            option="posts"
            action="Criar Post"
          />
          <DataTable
            data={data}
            isLoading={isLoading}
            error={error}
            option="posts"
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
