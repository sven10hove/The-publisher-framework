import Head from 'next/head';
import NextLink from 'next/link';
import { getPosts, getReadings } from '@/lib/notion';
import { Button, Box, Container, Flex, Heading } from '@chakra-ui/react';
import { name, description, url, socialImage } from '@/lib/config';
import { ChevronRightIcon } from '@chakra-ui/icons';

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
        <Box mb={[12, 16]}>
          <Flex align="center" justify="space-between" px={[4, 8]} mb={6}>
            <Heading as="h2" fontSize="xl">
              my thoughts
            </Heading>
          </Flex>

          <PostsList posts={posts.slice(0, 6)} />

          <Flex justify="flex-end" mt={8}>
            <NextLink href="/archive/posts" passHref>
              <Button
                as="a"
                w={['100%', '100%', 'unset']}
                rightIcon={<ChevronRightIcon />}
                bg="#D04E4A"
                color="white"
                size="lg"
                fontFamily="heading"
                _active={{ backgroundColor: '#bb3531' }}
                _hover={{ boxShadow: '2px 2px 0 #880400' }}
              >
                All posts
              </Button>
            </NextLink>
          </Flex>
        </Box>

        <Box>
          <Heading as="h2" fontSize="xl" px={[4, 8]} mb={6}>
            What I’m reading / watching
          </Heading>

          <ReadingsList readings={readings.slice(0, 6)} />

          <Flex justify="flex-end" mt={8}>
            <NextLink href="/archive/readings" passHref>
              <Button
                as="a"
                w={['100%', '100%', 'unset']}
                rightIcon={<ChevronRightIcon />}
                bg="#D04E4A"
                color="white"
                size="lg"
                fontFamily="heading"
                _active={{ backgroundColor: '#bb3531' }}
                _hover={{ boxShadow: '2px 2px 0 #880400' }}
              >
                View all
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Container>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  const readings = await getReadings();

  if (!posts || !readings) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: posts.data, readings: readings.data },
    revalidate: 10,
  };
}
