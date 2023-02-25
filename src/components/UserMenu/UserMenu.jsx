import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <div>
      <title>Welcome, {user.name}</title>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};
