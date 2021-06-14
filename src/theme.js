import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    primaryDark: '#0C0C0F',
    primaryLight: '#DADADA',
  },
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Noto Serif", serif',
  },
  styles: {
    global: (props) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? 'primaryDark' : 'gray.50',
        color: props.colorMode === 'dark' ? 'primaryLight' : 'primaryDark',
      },
    }),
  },
});

export default theme;
