import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#2f2f2f',
    secondary: '#008000',
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Roboto, sans-serif',
    sizes: {
      large: '24px',
      medium: '18px',
      small: '12px'
    },
  },
});

export default theme;