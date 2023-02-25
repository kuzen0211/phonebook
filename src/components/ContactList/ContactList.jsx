import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
