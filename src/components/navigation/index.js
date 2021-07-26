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
            <ListItem role="listitem"
              About me 
            ></ListItem>
            <ListItem role="listitem">
              <IconButton
                role="button"
                variant="ghost"
                colorScheme="gray"
                aria-label={
                  colorMode === 'dark'
                    ? 'Switch to dark mode'
                    : 'Switch to light mode'
                }
                size="lg"
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
              />
            </ListItem>
          </List>
        </Flex>
      </Container>
    </Box>
  );
};

const links = [];

export default Navigation;
