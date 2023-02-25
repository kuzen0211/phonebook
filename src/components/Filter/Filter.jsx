import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/slice';

import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlerFilterChange = evt => {
    dispatch(setFilter(evt?.target?.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        title="Filter is case unsensitive."
        onChange={handlerFilterChange}
        required
      />
    </Label>
  );
};
