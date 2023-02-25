import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useContacts } from 'components/hooks';

import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { InputForm } from 'components/InputForm/InputForm';
import { Loader } from 'components/Loader/Loader';

import { fetchContacts } from 'redux/contacts/operations';
import { AsideOperation, ContactsContainer } from 'components/common.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      <AsideOperation>
        <InputForm />
        <Filter />
        {isLoading && !error && <Loader />}
      </AsideOperation>
      <ContactList />
    </ContactsContainer>
  );
};

export default Contacts;
