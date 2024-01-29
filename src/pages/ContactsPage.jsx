import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import ContactsList from '../components/List/List';
import { Box, useTheme } from '@chakra-ui/react';

const ContactsPage = () => {
  const theme = useTheme()
  return (
    <Box style={{display: 'flex', flexDirection: 'column'}}>
      <h1
        style={{
          color: theme.colors.primary,
          fontSize: theme.fonts.sizes.large,
          marginBottom: "12px"
        }}>
        Phonebook
      </h1>
      <Form />
      <h2
        style={{
          color: theme.colors.primary,
          fontSize: theme.fonts.sizes.large,
          marginBottom: "12px"
        }}>
        Contacts
      </h2>            
      <Filter />
      <ContactsList />
    </Box>
  );
};

export default ContactsPage;