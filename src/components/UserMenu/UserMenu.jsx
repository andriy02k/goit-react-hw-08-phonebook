import { useSelector, useDispatch } from 'react-redux';
import { profileSelector } from '../../store/auth/selectors';
import { logoutThunk } from '../../store/auth/thunks';
import { Button, Box, useTheme } from '@chakra-ui/react';

const UserMenu = () => {
    const theme = useTheme()

    const user = useSelector(profileSelector);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logoutThunk());
    };
  return (
    <div>
        {user && (
            <Box style={{color: theme.colors.primary, marginBottom: "12px"}}>
                <p style={{marginBottom: "12px"}}>{user.email}</p>
                <Button onClick={handleClick}>Logout</Button>
            </Box>
      )}
    </div>
  )
}

export default UserMenu