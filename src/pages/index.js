import Head from 'next/head';
import { getPosts, getReadings } from '@/lib/notion';
import { Box, Container, Heading } from '@chakra-ui/react';
import { name, description, url, socialImage } from '@/lib/config';

import MainLayout from '@/layouts/MainLayout';
import PostsList from '@/components/posts/PostsList';
import ReadingsList from '@/components/readings/ReadingsList';

export default function Home({ posts, readings }) {
  return (
    <MainLayout>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={socialImage} />
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
