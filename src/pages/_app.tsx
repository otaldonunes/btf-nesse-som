import React from 'react';
import GlobalStyle from '@styles/GlobalStyle';
import { AppProps } from 'next/app';
import '@styles/_app.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
      {/* Excluir 'ReactQueryDevtools' em produção */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
