import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    dispatch(logIn({ email: email.value, password: password.value }));
    evt.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="enter your email..."
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="enter a password..."
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
