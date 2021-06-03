import { getOverview, getPost } from "../../lib/notion";
import { Container, Heading } from "@chakra-ui/react";
import MainLayout from "../../layouts/MainLayout";
import Blocks from "../../components/blocks";

export default function Post({ post }) {
  return (
    <MainLayout>
      <Container maxW="container.md">
        <Heading as="h1" mb={8}>
          Blog posts
        </Heading>
        <Blocks blocks={post} />
      </Container>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getOverview();

  const paths = posts.map((post) => ({
    params: { postId: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.postId);

  return { props: { post } };
}
