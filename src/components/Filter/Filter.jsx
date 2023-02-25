import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlerFilterChange = evt => {
    dispatch(setFilter(evt?.target?.value));
  };
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        title="Filter is case unsensitive."
        required
        onChange={handlerFilterChange}
      />
    </label>
  );
};
