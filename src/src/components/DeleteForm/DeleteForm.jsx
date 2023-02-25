import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contacts/operations.js';

import {
  StyledInput,
  StyledLabel,
  Button,
  StyledForm,
} from './DeleteForm.styled.js';
import { ButtonsWrapper } from './DeleteForm.styled.js';

export const DeleteForm = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();

  const handleDeleteSubmit = evt => {
    evt.preventDefault();

    dispatch(deleteContact(id));

    onClose();
  };

  return (
    <StyledForm onSubmit={handleDeleteSubmit}>
      <StyledLabel>
        Name
        <StyledInput type="text" value={name} disabled={true} />
      </StyledLabel>
      <StyledLabel>
        Phone
        <StyledInput type="tel" name="number" value={number} disabled={true} />
      </StyledLabel>
      <ButtonsWrapper>
        <Button type="submit">Delete</Button>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
      </ButtonsWrapper>
    </StyledForm>
  );
};

DeleteForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
