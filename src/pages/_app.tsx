import React from 'react';
import { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from '@styles/GlobalStyle';
import NextNprogress from 'nextjs-progressbar';
import '@styles/_app.css';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <NextNprogress color="#FF009A" />
      <Component {...pageProps} />
      {/* Excluir 'ReactQueryDevtools' em produção */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
