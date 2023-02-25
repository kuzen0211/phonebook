import { useAuth } from 'components/hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { Button, Wrapper, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Welcome, {user.name} </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Wrapper>
  );
};
