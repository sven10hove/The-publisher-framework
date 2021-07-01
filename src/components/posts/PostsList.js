import NextLink from 'next/link';
import {
  Button,
  Heading,
  Link,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';

import TextRenderer from '@/components/blocks/TextRenderer';
import ListSkeleton from '@/components/skeleton/ListSkeleton';

const PostsList = ({ posts, error, isLoadingMore, loadMore, reachedEnd }) => {
  const { colorMode } = useColorMode();

  const renderPosts = () => {
    if (error) {
      return <p>There was an error while fetching the posts...</p>;
    }

    if (!posts) {
      return <p>It&apos;s looking a bit empty here...</p>;
    }

    return posts.map((r) => {
      const { slug, entry, summary } = r.properties;

      return (
        <PostItem
          key={r.id}
          slug={slug.rich_text[0]}
          title={entry.title[0].text.content}
          summary={summary.rich_text}
        />
      );
    });
  };

  return (
    <>
      <SimpleGrid columns={[1, null, 2]} spacing={8}>
        {renderPosts()}

        {isLoadingMore && (
          <>
            <ListSkeleton type="posts" />
            <ListSkeleton type="posts" />
          </>
        )}
      </SimpleGrid>

      {loadMore && !reachedEnd && (
        <Button
          onClick={loadMore}
          disabled={isLoadingMore}
          colorScheme={colorMode === 'dark' ? 'gray' : 'black'}
          variant={colorMode === 'dark' ? 'solid' : 'outline'}
          w="100%"
          mt={[4, 8]}
          size="lg"
          fontFamily="heading"
          _hover={{ boxShadow: isLoadingMore ? 'unset' : '4px 4px 0 #EB5753' }}
        >
          {isLoadingMore ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </>
  );
};

export default PostsList;

const PostItem = ({ slug, title, summary }) => {
  const { colorMode } = useColorMode();

  return (
    <NextLink href={`/post/${slug.plain_text}`} passHref>
      <Link
        px={6}
        py={8}
        bg={colorMode === 'dark' ? 'primaryGray' : 'transparent'}
        border="1px"
        borderColor={colorMode === 'dark' ? 'transparent' : 'primaryDark'}
        borderRadius="md"
        _hover={{ textDecoration: 'none', boxShadow: '5px 5px 0 #EB5753' }}
      >
        <Heading as="h2" mb={[2, 4, 6]} fontSize="xl">
          {title}
        </Heading>

        <TextRenderer content={summary} />
      </Link>
    </NextLink>
  );
};
