import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import { usePosts } from '@hooks/usePosts';
import React, { useState } from 'react';
import { Container, Content, DrawerContent } from './styles';
import bg1 from '@assets/images/bg1.svg';
import logo from '@assets/images/logo.svg';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import {
  RiMenuFill,
  RiLogoutBoxRLine,
  RiVideoLine,
  RiMicLine,
  RiArticleLine,
  RiMusic2Line,
} from 'react-icons/ri';
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function Admin() {
  const { data, isLoading, isFetching, error } = usePosts();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    toast('👋 Deslogando...', {
      toastId: 'logout',
    });
    destroyCookie(null, 'token');
    router.push('/');
  };

  return (
    <Container>
      {!isDrawerOpen ? (
        <button type="button" className="hamburguer">
          <RiMenuFill color="#FFFFFF" size="2rem" onClick={toggleDrawer} />
        </button>
      ) : null}
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{}}
      >
        <DrawerContent>
          <div className="imageContent">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <button type="button">
              <RiArticleLine color="#350668" size="1.5rem" />
              <p>Publicações</p>
            </button>
            <button type="button">
              <RiMicLine color="#350668" size="1.5rem" />
              <p>Podcats</p>
            </button>
            <button type="button">
              <RiVideoLine color="#350668" size="1.5rem" />
              <p>Vídeos</p>
            </button>
            <button type="button">
              <RiMusic2Line color="#350668" size="1.5rem" />
              <p>Releases</p>
            </button>
          </nav>
          <button type="button">
            <RiLogoutBoxRLine
              color="#FFFFFF"
              size="2rem"
              onClick={handleLogout}
            />
          </button>
        </DrawerContent>
      </Drawer>
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
