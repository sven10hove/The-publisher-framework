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
import PostTags from "./PostTags";

const PostsList = ({ posts }) => {
  const renderPosts = posts.map((r) => {
    const { entry, summary, image, type } = r.properties;

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

          <Box mb={4}>
            <PostTags tags={type.multi_select} size="sm" />
          </Box>

          <TextRenderer text={summary.rich_text} />
        </Link>
      </NextLink>
    );
  });

  return <Stack spacing={8}>{renderPosts}</Stack>;
};

export default PostsList;
