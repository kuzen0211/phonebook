export const Filter = () => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        title="Filter is case unsensitive."
        required
      />
    </label>
  );
};
