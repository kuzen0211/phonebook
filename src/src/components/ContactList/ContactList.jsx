import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
