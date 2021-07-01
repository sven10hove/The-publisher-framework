import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    primaryDark: '#0C0C0F',
    primaryGray: '#1C1C1C',
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
        minHeight: '100vh',
      },
      body: {
        paddingBottom: '3rem',
      },
    }),
  },
});

export default theme;
