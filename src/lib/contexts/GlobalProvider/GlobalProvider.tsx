import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'lib/styles/global.style';
import theme from 'lib/styles/theme';

import 'react-toastify/dist/ReactToastify.css';

const GlobalProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <NextSeo
        title="União de Sonhos."
        description="Transformando sonhos em realidade."
        canonical="https://uniaodesonhos.com.br"
        openGraph={{
          url: 'https://uniaodesonhos.com.br',
          title: 'União de Sonhos',
          description: 'Transformando sonhos em realidade.',
          images: [
            {
              url: '/img/uniaodesonhos-logo-footer.svg',
              width: 800,
              height: 600,
              alt: 'União de Sonhos',
            },
          ],
          site_name: 'União de Sonhos',
        }}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#66D3E6" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#66D3E6" />
        <title>União de Sonhos</title>
      </Head>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
      {children}
    </ThemeProvider>
  );
};

export default GlobalProvider;
