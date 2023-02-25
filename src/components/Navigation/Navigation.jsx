import { Link } from 'react-router-dom';
import { useAuth } from 'components/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">My Contacts</Link>}
    </nav>
  );
};
