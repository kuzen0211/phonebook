import { useAuth } from 'components/hooks';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">My Contacts</Link>}
    </nav>
  );
};
