import { Container, Content } from './styles';
import { RiFileTextFill } from 'react-icons/ri';
import Link from 'next/link';
import usePagination from '@hooks/usePagination';
import { Pagination } from '@components/Adm/DataTable/Pagination';

interface dataTableProps {
  data: any;
  isLoading: boolean;
  error: unknown;
  option: string;
}

export function DataTable({ data, isLoading, error, option }: dataTableProps) {
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages,
  } = usePagination({
    contentPerPage: 5,
    count: isLoading ? 0 : data.length,
  });

  return (
    <Container>
      {isLoading ? (
        <>
          <Content>
            {[...Array(5)].map((_, index) => (
              <a key={index} className="disabled">
                <RiFileTextFill />
                Carregando...
              </a>
            ))}
          </Content>
          <Pagination
            nextPage={() => {}}
            prevPage={() => {}}
            page={1}
            totalPages={1}
          />
        </>
      ) : error ? (
        <p>Ops... estamos com alguns problemas, tente novamente mais tarde!</p>
      ) : (
        <>
          <Content>
            {data
              .slice(firstContentIndex, lastContentIndex)
              .map((item: any) => (
                <Link
                  href={`/adm/${option}/edit?id=${item.slug}`}
                  key={item.slug}
                >
                  <a>
                    <RiFileTextFill />
                    {item.title}
                  </a>
                </Link>
              ))}
          </Content>
          <Pagination
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            totalPages={totalPages}
          />
        </>
      )}
    </Container>
  );
}
