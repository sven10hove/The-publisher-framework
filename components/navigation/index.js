import { Box, Container, Flex, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";

const Navigation = () => {
  const renderLinks = links.map((l) => (
    <ListItem key={l.title} fontSize="md" fontFamily="pressStart">
      <NextLink href={l.url} passHref>
        <Link _hover={{ underline: "none", color: "purple.600" }}>
          {l.title}
        </Link>
      </NextLink>
    </ListItem>
  ));

  return (
    <Box as="nav" py={8}>
      <Container maxW="container.md">
        <Flex justify="space-between" align="center">
          <NextLink href="/" passHref>
            <Link
              fontSize="md"
              fontFamily="pressStart"
              _hover={{ underline: "none", color: "purple.600" }}
            >
              TWAN.DEV
            </Link>
          </NextLink>
          <List>{renderLinks}</List>
        </Flex>
      </Container>
    </Box>
  );
};

const links = [
  {
    url: "/about",
    title: "About",
  },
];

export default Navigation;
