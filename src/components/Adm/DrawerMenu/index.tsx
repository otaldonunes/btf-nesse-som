import {
  RiLogoutBoxRLine,
  RiVideoLine,
  RiMicLine,
  RiArticleLine,
  RiMusic2Line,
} from 'react-icons/ri';
import logo from '@assets/images/logo.svg';
import Drawer from 'react-modern-drawer';
import Link from 'next/link';
import { Container } from './styles';
import { destroyCookie } from 'nookies';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

type DrawerMenuProps = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
};

export function DrawerMenu({ isDrawerOpen, toggleDrawer }: DrawerMenuProps) {
  const router = useRouter();

  const handleLogout = () => {
    toast('👋 Deslogando...', {
      toastId: 'logout',
    });
    destroyCookie(null, 'token');
    router.push('/');
  };

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawer}
      direction="left"
      overlayOpacity={0.3}
    >
      <Container>
        <div className="imageContent">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <Link href="/adm/posts">
            <a>
              <RiArticleLine color="#350668" size="1.5rem" />
              Publicações
            </a>
          </Link>
          <Link href="/adm/podcasts">
            <a>
              <RiMicLine color="#350668" size="1.5rem" />
              Podcasts
            </a>
          </Link>
          <Link href="/adm/videos">
            <a>
              <RiVideoLine color="#350668" size="1.5rem" />
              Vídeos
            </a>
          </Link>
          <Link href="/adm/releases">
            <a>
              <RiMusic2Line color="#350668" size="1.5rem" />
              <p>Releases</p>
            </a>
          </Link>
        </nav>
        <button type="button">
          <RiLogoutBoxRLine
            color="#FFFFFF"
            size="2rem"
            onClick={handleLogout}
          />
        </button>
      </Container>
    </Drawer>
  );
}
