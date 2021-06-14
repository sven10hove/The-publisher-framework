import { HStack, Tag, TagLabel } from '@chakra-ui/react';

const PostTags = ({ tags, size }) => {
  const renderTags = tags.map((t) => (
    <Tag
      size={size}
      key={t.id}
      borderRadius="full"
      variant="solid"
      colorScheme="gray"
      fontFamily="heading"
      fontWeight="600"
    >
      <TagLabel>{t.name}</TagLabel>
    </Tag>
  ));

  return <HStack spacing={2}>{renderTags}</HStack>;
};

export default PostTags;
