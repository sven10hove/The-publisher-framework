import Head from 'next/head';

import Navigation from '@/components/navigation';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>twan.dev</title>
        <meta
          name="description"
          content="Personal website based with a Notion database"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {children}
    </>
  );
};

export default MainLayout;
