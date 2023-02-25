import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { useContacts } from 'components/hooks';

import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { InputForm } from 'components/InputForm/InputForm';
import { Loader } from 'components/Loader/Loader';

import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <InputForm />
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
};

export default Contacts;
