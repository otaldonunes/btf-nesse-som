import {
  RiInstagramLine,
  RiTwitterLine,
  RiFacebookLine,
  RiSpotifyLine,
} from 'react-icons/ri';
import { Container } from './styles';

export function SocialLinks(): JSX.Element {
  const svgSize = '2.5em';

  return (
    <Container>
      <a
        href="https://www.instagram.com/botofenessesom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiInstagramLine size={svgSize} title="Instagram" />
      </a>
      <a
        href="https://www.twitter.com/botofenessesom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterLine size={svgSize} title="Twitter" />
      </a>
      <a
        href="https://www.facebook.com/botofenessesom"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFacebookLine size={svgSize} title="Facebook" />
      </a>
      <a
        href="https://open.spotify.com/show/6l6uBdmqJkoJlXQKUN5blQ?si=28785dc6f9ef4736"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiSpotifyLine size={svgSize} title="Spotify" />
      </a>
    </Container>
  );
}
