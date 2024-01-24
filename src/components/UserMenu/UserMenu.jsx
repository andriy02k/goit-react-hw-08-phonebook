import { useSelector, useDispatch } from 'react-redux';
import { profileSelector } from '../../store/auth/selectors';
import { logoutThunk } from '../../store/auth/thunks';

const UserMenu = () => {
    const user = useSelector(profileSelector);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logoutThunk());
    };
  return (
    <div>
        {user && (
            <>
                <p>{user.email}</p>
                <button onClick={handleClick}>Logout</button>
            </>
      )}
    </div>
  )
}

export default UserMenu