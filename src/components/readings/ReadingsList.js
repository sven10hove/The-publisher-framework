import NextLink from 'next/link';
import {
  Button,
  Heading,
  Flex,
  Link,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import ListSkeleton from '@/components/skeleton/ListSkeleton';

const ReadingsList = ({
  readings,
  error,
  isLoadingMore,
  loadMore,
  reachedEnd,
}) => {
  const { colorMode } = useColorMode();

  const renderReadings = () => {
    if (error) {
      return <p>There was an error while fetching the readings...</p>;
    }

    if (!readings) {
      return <p>It&apos;s looking a bit empty here...</p>;
    }

    return readings.map((r) => {
      const { entry, URL } = r.properties;

      return (
        <PostItem
          key={r.id}
          title={entry.title[0].text.content}
          url={URL.url}
        />
      );
    });
  };

  return (
    <>
      <SimpleGrid columns={[1, null, 2]} spacing={4}>
        {renderReadings()}

        {isLoadingMore && (
          <>
            <ListSkeleton />
            <ListSkeleton />
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
          <ChevronRightIcon w={30} h={25} />
        </Flex>
      </Link>
    </NextLink>
  );
};
