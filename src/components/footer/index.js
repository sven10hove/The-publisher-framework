import { Box, Container } from '@chakra-ui/react';

import Socials from '@/components/socials';

const Footer = () => (
  <Box as="footer" w="100%" position="absolute" bottom="0" py={4}>
    <Container maxW="container.lg">
      <Box px={[null, null, 8]}>
        <Socials />
      </Box>
    </Container>
  </Box>
);

export default Footer;
