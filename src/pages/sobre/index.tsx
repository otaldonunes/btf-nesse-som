import { Container, Content } from './styles';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { SocialLinks } from '@components/Sobre/SocialLinks';

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
          <SocialLinks />
        </Content>
      </Container>
      <Footer />
    </>
  );
}
