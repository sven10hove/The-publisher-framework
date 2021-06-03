import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Link,
  Stack,
} from "@chakra-ui/react";
import TextRenderer from "../blocks/TextRenderer";

const PostsList = ({ posts }) => {
  const renderPosts = posts.map((r) => {
    const { entry, summary, image, type } = r.properties;

    const renderTags = type.multi_select.map((t) => (
      <Tag
        size="md"
        key={t.id}
        borderRadius="full"
        variant="solid"
        colorScheme="gray"
      >
        <TagLabel>{t.name}</TagLabel>
      </Tag>
    ));

    return (
      <NextLink key={r.id} href={`/post/${r.id}`} passHref>
        <Link
          pb={8}
          _hover={{ textDecoration: "none" }}
          _notLast={{ borderBottom: "1px", borderBottomColor: "gray.900" }}
        >
          <Box
            position="relative"
            height="350px"
            mb={8}
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src={image.url}
              alt={entry.title[0].text.content}
              layout="fill"
            />
          </Box>
          <Heading as="h2" mb={4}>
            {entry.title[0].text.content}
          </Heading>

          <HStack spacing={2} mb={4}>
            {renderTags}
          </HStack>

          <TextRenderer text={summary.rich_text} />
        </Link>
      </NextLink>
    );
  });

  return <Stack spacing={8}>{renderPosts}</Stack>;
};

export default PostsList;
