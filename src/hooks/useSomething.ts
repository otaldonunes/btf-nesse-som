// import { useQuery } from 'react-query';
// import { api } from '@services/api';

// type User = {
//   id: string;
//   title: string;
//   description: string;
// };

// type SetSomethingResponse = {
//   totalCount: number;
//   something: User[];
// };

// export async function getSomething(
//   page: number
// ): Promise<SetSomethingResponse> {
//   // change this to your API call
//   const { data, headers } = await api.get('/something', {
//     params: {
//       page,
//     },
//   });

//   const totalCount = Number(headers['x-total-count']);

//   const something = data.something.map((something) => {
//     return {
//       id: something.id,
//       title: something.title,
//       description: something.description,
//     };
//   });

//   return { something, totalCount };
// }

// export function useSomething(page: number) {
//   return useQuery(['something', page], () => getSomething(page), {
//     staleTime: 1000 * 60 * 60, // 1 hour
//   });
// }
