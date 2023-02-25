import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, email, password } = evt.currentTarget.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    evt.currentTarget.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="enter your name"
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="enter your email"
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="7 characters or longer"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
