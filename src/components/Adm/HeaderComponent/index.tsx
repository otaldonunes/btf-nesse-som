import Link from 'next/link';
import { RiAddCircleLine, RiArrowRightSLine } from 'react-icons/ri';
import { Container } from './styles';

interface HeaderComponentProps {
  title: string;
  option: string;
  action: string;
}

export function HeaderComponent({
  title,
  option,
  action,
}: HeaderComponentProps) {
  return (
    <Container>
      <h1>
        <RiArrowRightSLine size="5rem" className="arrow" />
        {title}
      </h1>
      <div>
        <Link href={`/adm/${option}/create`}>
          <a>
            <RiAddCircleLine />
            {action}
          </a>
        </Link>
      </div>
    </Container>
  );
}
