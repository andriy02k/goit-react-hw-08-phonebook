import { useNavigate } from 'react-router-dom';
import { FormLabel, Button, Input, Box, useTheme } from '@chakra-ui/react';

const LoginForm = ({ login }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const loginData = { email: email.value, password: password.value };
    console.log('Login data:', loginData);
    login(loginData);
    navigate('/contacts');
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '8px' }}>
          <FormLabel style={{ fontSize: '28px' }}>Email address</FormLabel>
          <Input type="email" name="email" />
          <Box style={{ color: theme.colors.secondary, fontSize: '14px' }}>
            We'll never share your email with anyone else.
          </Box>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <FormLabel style={{ fontSize: '28px' }}>Password</FormLabel>
          <Input name="password" type="password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default LoginForm;
