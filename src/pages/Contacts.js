import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { InputForm } from 'components/InputForm/InputForm';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  return (
    <>
      <InputForm />
      <Filter />
      <Loader />
      <ContactList />
    </>
  );
};

export default Contacts;
