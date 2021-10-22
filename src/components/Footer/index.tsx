import { Container, Content } from './styles';
import logo from '@assets/images/logo.svg';
import { RiMailFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';

export function Footer(): JSX.Element {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Pra cego ver: Logo Boto Fé Nesse Som" />
        <div>
          <p>
            Liquam accumsan eros libero, ac tristique mi tristique tempus.
            Integer pretium lorem euismod libero convallis suscipit. Sed eget
            viverra orci, sed ultricies turpis. Donec euismod egestas nunc, et
            venenatis massa. Aenean sed sem orci. Donec molestie nulla eu augue
            gravida, sed rhoncus mauris imperdiet.
          </p>
          <div>
            <a
              href="mailto:contato@botofenessesom.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiMailFill />
              <p>contato@botofenessesom.com.br</p>
            </a>
            <a
              href="https://www.twitter.com/botofenessesom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterFill />
              <p>@botofenessesom</p>
            </a>
            <a
              href="https://www.instagram.com/botofenessesom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill />
              <p>@botofenessesom</p>
            </a>
          </div>
        </div>
      </Content>
    </Container>
  );
}
