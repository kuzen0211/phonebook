import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contacts/operations.js';

import { Input, Label, Button, Form } from './DeleteForm.styled.js';
import { ButtonsWrapper } from './DeleteForm.styled.js';

export const DeleteForm = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();

  const handleDeleteSubmit = evt => {
    evt.preventDefault();

    dispatch(deleteContact(id));

    onClose();
  };

  return (
    <Form onSubmit={handleDeleteSubmit}>
      <Label>
        Name
        <Input type="text" value={name} disabled={true} />
      </Label>
      <Label>
        Phone
        <Input type="tel" name="number" value={number} disabled={true} />
      </Label>
      <ButtonsWrapper>
        <Button type="submit">Delete</Button>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
      </ButtonsWrapper>
    </Form>
  );
};

DeleteForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
