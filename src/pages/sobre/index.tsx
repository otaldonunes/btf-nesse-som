import { Container, Content } from './styles';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import {
  RiInstagramLine,
  RiTwitterLine,
  RiFacebookLine,
  RiSpotifyLine,
} from 'react-icons/ri';

export default function Sobre() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>SOBRE QUEM SOMOS</h1>
          <div>
            <p>
              Quisque id efficitur quam. Donec non dolor pretium nulla bibendum
              gravida vel non mi. Sed congue felis iaculis risus ullamcorper,
              sit amet cursus tellus commodo. Proin convallis vel arcu non
              facilisis. Nam malesuada cursus malesuada. Ut fermentum risus non
              tortor semper, at semper turpis scelerisque. Duis finibus, risus
              porttitor accumsan imperdiet, tellus orci fringilla libero, quis
              ullamcorper elit massa ac justo. Aenean id tincidunt neque.
              Quisque id efficitur quam. Donec non dolor pretium nulla bibendum
              gravida vel non mi. Sed congue felis iaculis risus ullamcorper,
              sit amet cursus tellus commodo. Proin convallis vel arcu non
              facilisis. Nam malesuada cursus malesuada. Ut fermentum risus non
              tortor semper, at semper turpis scelerisque. Duis finibus, risus
              porttitor accumsan imperdiet, tellus orci fringilla libero, quis
              ullamcorper elit massa ac justo. Aenean id tincidunt neque. Duis
              finibus, risus porttitor accumsan imperdiet, tellus orci fringilla
              libero, quis ullamcorper elit massa ac justo. Aenean id tincidunt
              neque.Duis finibus, risus porttitor accumsan imperdiet, tellus
              orci fringilla libero.
            </p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/botofenessesom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramLine size="2.5rem" title="Instagram" />
            </a>
            <a
              href="https://www.twitter.com/botofenessesom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterLine size="2.5rem" title="Twitter" />
            </a>
            <a
              href="https://www.facebook.com/botofenessesom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookLine size="2.5rem" title="Facebook" />
            </a>
            <a
              href="https://open.spotify.com/show/6l6uBdmqJkoJlXQKUN5blQ?si=28785dc6f9ef4736"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiSpotifyLine size="2.5rem" title="Spotify" />
            </a>
          </div>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
