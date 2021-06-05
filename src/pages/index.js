import { getOverview } from "@/lib/notion";
import { Container } from "@chakra-ui/react";

import MainLayout from "@/layouts/MainLayout";
import PostsList from "@/components/posts/PostsList";

export default function Home({ posts }) {
  return (
    <MainLayout>
      <Container maxW="container.sm">
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
