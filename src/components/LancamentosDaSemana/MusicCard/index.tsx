import { RiSpotifyFill } from 'react-icons/ri';
import { Container } from './styles';
import album from '@assets/images/album.svg';

export function MusicCard(): JSX.Element {
  const svgSize = '8rem';

  return (
    <Container>
      <figure>
        <img src={album} alt={`Pra cego ver: Capa do SINGLE Homem com H`} />
      </figure>
      <div>
        <h1>Homem com H</h1>
        <p>Nação Zumbi, Samantha Schütz</p>
        <h3>samba-reagge, rock</h3>
        <div className="listen">
          <h4>SINGLE</h4>
          <a href="#">
            <RiSpotifyFill size="2rem" />
          </a>
        </div>
      </div>
    </Container>
  );
}
