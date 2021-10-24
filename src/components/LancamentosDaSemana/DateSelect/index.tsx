import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Container } from './styles';

export function DateSelect(): JSX.Element {
  const svgSize = '8rem';

  return (
    <Container>
      <div>
        <RiArrowLeftSLine size={svgSize} />
        <h1>LANÇAMENTOS DA SEMANA</h1>
        <RiArrowRightSLine size={svgSize} />
      </div>
      <p>esta semana</p>
    </Container>
  );
}
