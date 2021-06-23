import Head from 'next/head';
import { getPosts, getReadings } from '@/lib/notion';
import { Box, Container, Heading } from '@chakra-ui/react';

import MainLayout from '@/layouts/MainLayout';
import PostsList from '@/components/posts/PostsList';
import ReadingsList from '@/components/readings/ReadingsList';

export default function Home({ posts, readings }) {
  return (
    <MainLayout>
      <Head>
        <title>Sven</title>
        <meta
          name="description"
          content="thoughts ideas and what not"
        />
        <meta property="og:title" content="Sven" />
        <meta
          property="og:description"
          content="thoughts ideas and what not"
        />
        <meta property="og:url" content="https://twan.dev" />
      </Head>

      <Container maxW="container.lg" pb={16}>
        <Box mb={[8, 16]}>
          <Heading as="h2" fontSize="xl" px={[4, 8]} mb={6}>
            my thoughts
          </Heading>
          <PostsList posts={posts} />
        </Box>

        <Box>
          <Heading as="h2" fontSize="xl" px={[4, 8]} mb={6}>
            What I’m reading / watching
          </Heading>
          <ReadingsList readings={readings} />
        </Box>
      </Container>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const posts = await getPosts();
  const readings = await getReadings();

  if (!posts || !readings) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: posts, readings: readings },
    revalidate: 10,
  };
}
