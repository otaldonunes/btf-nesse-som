import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Container, Content } from './styles';

export default function NotFound(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <p>ERROR</p>
          <p>404</p>
          <h1>Tu bota fé que essa página não foi encontrada?</h1>
          <p>
            A página que você está procurando pode ter sido removida, renomeada
            ou talvez ela nem exista.
          </p>
        </Content>
      </Container>
      <Footer />
    </>
  );
}
