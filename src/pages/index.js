import Head from 'next/head';
import { getOverview } from '@/lib/notion';
import { Container, Heading } from '@chakra-ui/react';

import MainLayout from '@/layouts/MainLayout';
import PostsList from '@/components/posts/PostsList';

export default function Home({ posts }) {
  return (
    <MainLayout>
      <Head>
        <title>twan.dev</title>
        <meta
          name="description"
          content="Twan Kruiswijk personal blog about life, music, code and more."
        />
        <meta property="og:title" content="twan.dev" />
        <meta
          property="og:description"
          content="Twan Kruiswijk personal blog about life, music, code and more."
        />
        <meta property="og:url" content="https://twan.dev" />
      </Head>

      <Container maxW="container.lg" mb={16}>
        <Heading as="h2" fontSize="xl" px={[4, 8]} mb={6}>
          my thoughts
        </Heading>
        <PostsList posts={posts} />
      </Container>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const response = await getOverview();

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: response },
    revalidate: 10,
  };
}
