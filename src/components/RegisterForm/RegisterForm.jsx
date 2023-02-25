export const RegisterForm = () => {
  return (
    <form autoComplete="off">
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
