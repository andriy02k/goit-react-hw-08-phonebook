import UserMenu from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthSelector, profileSelector } from '../../store/auth/selectors';

const Navigation = () => {
  const user = useSelector(profileSelector);
  const token = useSelector(isAuthSelector) ?? '';
  return (
    <>
          {!user && (
            <nav>
              {token && (
                <Link to="/contacts">
                  Contacts
                </Link>
              )}
              <Link to="/signup">
                Sign Up
              </Link>
              <Link to="/login">
                Login
              </Link>
            </nav>
          )}
          <UserMenu/>
      {/* <>
        {user ? (
          <h1>Welcome '{user.name}' your contacts</h1>
        ) : (
          <h1>Welcome guest please login</h1>
        )}
      </> */}
    </>
  );
};

export default Navigation;