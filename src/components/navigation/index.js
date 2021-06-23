import NextLink from 'next/link';
import {
  Box,
  Container,
  Flex,
  Link,
  List,
  ListItem,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { name } from '@/lib/config';

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const renderLinks = links.map((l) => (
    <ListItem key={l.title} fontSize="md" fontFamily="heading">
      <NextLink href={l.url} passHref>
        <Link _hover={{ underline: 'none' }}>{l.title}</Link>
      </NextLink>
    </ListItem>
  ));

  return (
    <Box as="nav" py={[6, 8]} mb={8}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" px={[null, null, 8]}>
          <NextLink href="/" passHref>
            <Link
              fontSize={['xl', '3xl']}
              fontFamily="heading"
              fontWeight={600}
              _hover={{ underline: 'none' }}
            >
              {name}
            </Link>
          </NextLink>
          <List>
            {renderLinks}
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="change color mode"
              size="lg"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </List>
        </Flex>
      </Container>
    </Box>
  );
};

const links = [];

export default Navigation;
