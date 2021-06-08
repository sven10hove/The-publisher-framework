import Image from 'next/image';
import { getOverview, getPostBySlug } from '@/lib/notion';
import { Box, Container, Heading } from '@chakra-ui/react';

import MainLayout from '@/layouts/MainLayout';
import Blocks from '@/components/blocks';
import PostTags from '@/components/posts/PostTags';

export default function Post({ post }) {
  const { pageInfo, blocks } = post;
  const { entry, image, type } = pageInfo.properties;

  return (
    <MainLayout>
      <Container maxW="container.sm">
        <Box
          position="relative"
          height={[200, 300, 350]}
          mb={[4, 8]}
          borderRadius="lg"
          overflow="hidden"
        >
          <Image
            src={image.url}
            alt={entry.title[0].text.content}
            layout="fill"
          />
        </Box>

        <Heading as="h1" mb={2}>
          {entry.title[0].text.content}
        </Heading>

        <Box mb={6}>
          <PostTags tags={type.multi_select} size="sm" />
        </Box>

        <Blocks blocks={blocks} />
      </Container>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getOverview();

  const paths = posts.map((post) => ({
    params: { slug: post.properties.slug.rich_text[0].plain_text },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return { props: { post }, revalidate: 10 };
}
