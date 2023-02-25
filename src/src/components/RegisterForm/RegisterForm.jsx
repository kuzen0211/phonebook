import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Form, Input, Label } from './RegisterForm.styled';

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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="enter your name..."
          required
        />
      </Label>
      <Label>
        Email:
        <Input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="enter your email..."
          required
        />
      </Label>
      <Label>
        Password:
        <Input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="7 characters or longer..."
          required
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
