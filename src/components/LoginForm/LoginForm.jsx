export const LoginForm = () => {
  return (
    <form>
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
