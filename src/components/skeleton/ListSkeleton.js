import { Box, useColorMode, SkeletonText } from '@chakra-ui/react';

const ListSkeleton = ({ type }) => {
  const { colorMode } = useColorMode();

  const startColor = colorMode === 'dark' ? 'white' : 'gray.400';
  const endColor = colorMode === 'dark' ? 'gray.500' : 'gray.900';

  const defaultBoxProps = {
    px: 6,
    py: 8,
    bg: colorMode === 'dark' ? 'primaryGray' : 'transparent',
    border: '1px',
    borderColor: colorMode === 'dark' ? 'transparent' : 'primaryDark',
    borderRadius: 'md',
    _hover: { textDecoration: 'none', boxShadow: '5px 5px 0 #EB5753' },
  };

  const defaultSkeletonTextProps = {
    startColor: startColor,
    endColor: endColor,
  };

  if (type === 'posts') {
    return (
      <Box height="210px" {...defaultBoxProps}>
        <SkeletonText
          mt="4"
          noOfLines={1}
          mb={[2, 4, 6]}
          {...defaultSkeletonTextProps}
        />

        <SkeletonText noOfLines={4} spacing="2" {...defaultSkeletonTextProps} />
      </Box>
    );
  }

  return (
    <Box height="75px" {...defaultBoxProps}>
      <SkeletonText noOfLines={1} {...defaultSkeletonTextProps} />
    </Box>
  );
};

export default ListSkeleton;
