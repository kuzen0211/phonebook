import { useAuth } from 'components/hooks';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">My Contacts</StyledLink>}
    </nav>
  );
};
