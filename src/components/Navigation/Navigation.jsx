import UserMenu from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthSelector, profileSelector } from '../../store/auth/selectors';
import { Link as ChakraLink, Box, useTheme } from '@chakra-ui/react';

const Navigation = () => {
  const theme = useTheme();

  const user = useSelector(profileSelector);
  const token = useSelector(isAuthSelector) ?? '';
  return (
    <Box style={{ color: theme.colors.primary, marginBottom: '12px' }}>
      {token && (
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '8px',
            _hover: { textDecoration: 'underline' },
            _active: { textDecoration: 'underline' },
          }}
        >
          <ChakraLink as={Link} to="/contacts">
            Contacts
          </ChakraLink>
        </nav>
      )}
      {!user && (
        <nav
          style={{
            display: 'flex',
            gap: '14px',
            _hover: { textDecoration: 'underline' },
            _active: { textDecoration: 'underline' },
          }}
        >
          <ChakraLink as={Link} to="/signup">
            Sign Up
          </ChakraLink>
          <ChakraLink as={Link} to="/login">
            Login
          </ChakraLink>
        </nav>
      )}
      <UserMenu />
    </Box>
  );
};

export default Navigation;
