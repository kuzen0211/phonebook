import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operations.js';
import { selectContacts } from 'redux/contacts/selectors.js';

export const InputForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt?.target;
    const { name, number } = form.elements;
    const contactName = name.value.trim();
    const contactPhone = number.value.trim();

    if (
      !contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === contactName.toLowerCase()
      )
    ) {
      form.reset();

      dispatch(addContact({ name: contactName, number: contactPhone }));
    } else {
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          autoComplete="off"
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
