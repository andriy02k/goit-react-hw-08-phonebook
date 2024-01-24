import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import List from '../components/List/List';

const ContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>            
      <Filter />
      <List />
    </>
  );
};

export default ContactsPage;