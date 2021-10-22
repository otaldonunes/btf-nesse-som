import { Container, Content } from './styles';
import Link from 'next/link';
import logo from '@assets/images/logo.svg';

export function Header(): JSX.Element {
  return (
    <Container>
      <Content>
        <Link href="/">
          <img src={logo} alt="Pra cego ver: Logo Boto Fé Nesse Som" />
        </Link>
        <nav>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/publicacoes">
            <a>PUBLICAÇÕES</a>
          </Link>
          <Link href="/podcasts">
            <a>PODCASTS</a>
          </Link>
          <Link href="/videos">
            <a>VÍDEOS</a>
          </Link>
          <Link href="/lancamentos-da-semana">
            <a>LANÇAMENTOS DA SEMANA</a>
          </Link>
          <Link href="/sobre">
            <a>SOBRE</a>
          </Link>
        </nav>
      </Content>
    </Container>
  );
}
