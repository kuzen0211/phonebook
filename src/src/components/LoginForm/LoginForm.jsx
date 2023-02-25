import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Form, Input, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    dispatch(logIn({ email: email.value, password: password.value }));
    evt.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="enter your email..."
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="enter a password..."
          required
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
