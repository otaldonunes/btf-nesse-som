import { Container } from './styles';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
interface PaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  page: number;
  totalPages: number;
}

export function Pagination({
  nextPage,
  prevPage,
  page,
  totalPages,
}: PaginationProps) {
  return (
    <Container>
      <button type="button">
        <RiArrowLeftSLine color="#FFFFFF" size="2rem" onClick={prevPage} />
      </button>
      <p>{totalPages === 0 ? `0 de 0` : `${page} de ${totalPages}`}</p>
      <button type="button">
        <RiArrowRightSLine color="#FFFFFF" size="2rem" onClick={nextPage} />
      </button>
    </Container>
  );
}
