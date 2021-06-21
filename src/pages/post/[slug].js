import Head from 'next/head';
import Image from 'next/image';
import { getPosts, getPostBySlug } from '@/lib/notion';
import { AspectRatio, Container, Heading } from '@chakra-ui/react';

import MainLayout from '@/layouts/MainLayout';
import Blocks from '@/components/blocks';

export default function Post({ post }) {
  const { pageInfo, blocks } = post;
  const { entry, slug, summary, image, social_image } = pageInfo.properties;

  return (
    <MainLayout>
      <Head>
        <title>twan.dev - {entry.title[0].text.content}</title>
        <meta name="description" content={summary.rich_text[0].text.content} />
        <meta property="og:title" content="twan.dev" />
        <meta
          property="og:description"
          content={summary.rich_text[0].text.content}
        />
        <meta
          property="og:url"
          content={`https://twan.dev/${slug.rich_text[0].plain_text}`}
        />
        <meta
          property="og:image"
          content={social_image ? social_image.url : image.url}
        />
      </Head>

      <Container maxW="container.lg" mt={[8, 16]} mb={[8, 16]}>
        <Heading
          as="h1"
          mb={[4, 8, 16]}
          fontSize={['2xl', '4xl', '5xl']}
          px={[null, null, 16]}
        >
          {entry.title[0].text.content}
        </Heading>

        <AspectRatio
          ratio={16 / 9}
          mb={[4, 8]}
          overflow="hidden"
          borderRadius="lg"
        >
          <Image
            src={image.url}
            alt={entry.title[0].text.content}
            layout="fill"
            objectFit="cover"
          />
        </AspectRatio>
      </Container>

      <Container maxW="container.md" px={[5, 6, 16]} pb={16}>
        <Blocks blocks={blocks} />
      </Container>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.properties.slug.rich_text[0].plain_text },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return { props: { post }, revalidate: 10 };
}
