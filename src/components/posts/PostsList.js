import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Heading, Link, Stack } from '@chakra-ui/react';

import TextRenderer from '@/components/blocks/TextRenderer';
import PostTags from '@/components/posts/PostTags';

const PostsList = ({ posts }) => {
  const renderPosts = posts.map((r) => {
    const { slug, entry, summary, image, type } = r.properties;

    return (
      <PostItem
        key={r.id}
        slug={slug.rich_text[0]}
        imageUrl={image.url}
        title={entry.title[0].text.content}
        tags={type.multi_select}
        summary={summary.rich_text}
      />
    );
  });

  return <Stack spacing={8}>{renderPosts}</Stack>;
};

export default PostsList;

const PostItem = ({ imageUrl, slug, title, tags, summary }) => (
  <NextLink href={`/post/${slug.plain_text}`} passHref>
    <Link
      pb={8}
      _hover={{ textDecoration: 'none' }}
      _notLast={{ borderBottom: '1px', borderBottomColor: 'gray.300' }}
    >
      <Box
        position="relative"
        height={[200, 300, 350]}
        mb={[4, 8]}
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={imageUrl} alt={title} layout="fill" />
      </Box>

      <Heading as="h2" mb={[2, 4]}>
        {title}
      </Heading>

      <Box mb={4}>
        <PostTags tags={tags} size="sm" />
      </Box>

      <TextRenderer text={summary} />
    </Link>
  </NextLink>
);
