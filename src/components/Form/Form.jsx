import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, getContactsThunk } from '../../store/thunks';
import { contactsSelector } from '../../store/selectors';
import { FormLabel, Button, Input, useTheme } from '@chakra-ui/react';

const Form = () => {
  const theme = useTheme()
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangeNumber = ({ target: { value } }) => setNumber(value); 

  useEffect(() => {
    dispatch(getContactsThunk())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some(el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(addContactsThunk({ name, number }));
      setName('');
      setNumber('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <Input type="text" name="name" value={name} onChange={handleChangeName} required />
      </FormLabel>
      <FormLabel style={{fontSize: theme.fonts.sizes.medium, marginBottom: '12px'}}>
        Number
        <Input type="tel" name="number" value={number} onChange={handleChangeNumber} required />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </form>
  )
}

export default Form