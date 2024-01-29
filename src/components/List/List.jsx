import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dellContactsThunk } from '../../store/thunks';
import { contactsSelector, filterSelector } from '../../store/selectors';
import { List, Button, useTheme } from '@chakra-ui/react';

const ContactsList = () => {
  const theme = useTheme()
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const removeContact = id => {
      dispatch(dellContactsThunk(id));
  }

  const filterContact = () => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  };

  const filteredContacts = filterContact();
    
  return (
    <List>
          {filteredContacts.map(({ id, name, number }) => (
              <li key={id} style={{fontSize: theme.fonts.sizes.medium, marginBottom: '4px'}}>
                  {name}: {number}
                  <Button onClick={() => removeContact(id)}>Delete</Button>
              </li>
          ))}
    </List>
  )
}

export default ContactsList