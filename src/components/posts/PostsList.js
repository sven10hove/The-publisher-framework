import NextLink from 'next/link';
import { Box, Heading, Link, SimpleGrid, useColorMode } from '@chakra-ui/react';

import TextRenderer from '@/components/blocks/TextRenderer';
import PostTags from '@/components/posts/PostTags';

const PostsList = ({ posts }) => {
  const renderPosts = posts.map((r) => {
    const { slug, entry, summary, type } = r.properties;

    return (
      <PostItem
        key={r.id}
        slug={slug.rich_text[0]}
        title={entry.title[0].text.content}
        tags={type.multi_select}
        summary={summary.rich_text}
      />
    );
  });

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={8}>
      {renderPosts}
    </SimpleGrid>
  );
};

export default PostsList;

const PostItem = ({ slug, title, tags, summary }) => {
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

        <TextRenderer text={summary} />
      </Link>
    </NextLink>
  );
};
