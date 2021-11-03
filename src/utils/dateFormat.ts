import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function dateFormat(date: string): string {
  const formattedDate = format(new Date(Number(date)), 'Pp', {
    locale: ptBR,
  });

  return formattedDate;
}
