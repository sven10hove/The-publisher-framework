import NextLink from 'next/link';
import { Heading, Flex, Link, SimpleGrid, useColorMode } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'


const ReadingsList = ({ readings }) => {
  const renderReadings = readings.map((r) => {
    const { entry, URL } = r.properties;

    return (
      <PostItem key={r.id} title={entry.title[0].text.content} url={URL.url} />
    );
  });

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={4}>
      {renderReadings}
    </SimpleGrid>
  );
};

export default ReadingsList;

const PostItem = ({ title, url }) => {
  const { colorMode } = useColorMode();

  return (
    <NextLink href={url} passHref>
      <Link
        isExternal
        px={6}
        py={6}
        bg={colorMode === 'dark' ? 'primaryGray' : 'transparent'}
        border="1px"
        borderColor={colorMode === 'dark' ? 'transparent' : 'primaryDark'}
        borderRadius="lg"
        _hover={{ textDecoration: 'none', boxShadow: '5px 5px 0 #EB5753' }}
      >
        <Flex justify="space-between" align="center">
            <Heading as="h2" fontSize="base">
            {title}
            </Heading>
            <ChevronRightIcon w={30} h={25}/>
        </Flex>
      </Link>
    </NextLink>
  );
};
