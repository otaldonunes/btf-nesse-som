import { Container, Content } from './styles';
import { DateSelect } from '@components/LancamentosDaSemana/DateSelect';
import { MusicCard } from '@components/LancamentosDaSemana/MusicCard';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

export default function LancamentosDaSemana(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <DateSelect />
          <MusicCard />
          <MusicCard />
        </Content>
      </Container>
      <Footer />
    </>
  );
}
