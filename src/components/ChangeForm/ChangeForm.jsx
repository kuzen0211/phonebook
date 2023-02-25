import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import PropTypes from 'prop-types';

import { editContact } from 'redux/contacts/operations.js';

import { selectContacts } from 'redux/contacts/selectors.js';
import { toastMessage } from 'components/Layout.jsx';

export const ChangeForm = ({ id, name, number, onClose }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState(name);
  const [numberValue, setNumberValue] = useState(number);

  const handleChange = evt => {
    const currentInput = evt?.target;
    if (currentInput.name === 'name') {
      setNameValue(currentInput.value);
    } else {
      setNumberValue(currentInput.value);
    }
  };

  const handleEditSubmit = evt => {
    evt.preventDefault();

    const form = evt?.target;
    const { name: nameInput, number: numberInput } = form.elements;

    const contactName = nameInput.value.trim();
    const contactPhone = numberInput.value.trim();

    if (
      contacts.some(
        contact => contact.name.toLowerCase().trim() === contactName
      ) &&
      contactName !== name
    ) {
      toastMessage('Contact with such name exists yet.');
      return;
    }

    if (contactName === name && contactPhone === number) {
      onClose();
      return;
    }

    dispatch(editContact({ id, name: contactName, number: contactPhone }));
    onClose();
  };
  return (
    <form onSubmit={handleEditSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={nameValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="number"
          value={numberValue}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Edit contact</button>
    </form>
  );
};

ChangeForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
