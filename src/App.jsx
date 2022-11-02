import React, {useState, useEffect} from 'react';
import ContactForm from './components/ContactForm';
import {ContactList} from 'components/ContactList';
import { nanoid } from 'nanoid';
import {Box} from './components/Box.styled';
import  {Filter}  from './components/Filter';
import { useSelector } from 'react-redux';
// import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';


export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  // const [filter, setFilter] = useState('');
  const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  
  
  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const normalizedName = name.toLowerCase();
    const repeatedContact = contacts.find(contact => contact.name.toLowerCase() === normalizedName);
    repeatedContact
      ? alert(`${name} is already in contacts.`)
      :setContacts([...contacts, newContact]);
  };
      
  // const changeFilter = event => {
  //   dispatch(setFilter(event.currentTarget.value));
  // };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return (
      <Box pad="20px">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter 
          value={filter}
      // onChange={changeFilter} 
      />
        {filter ? (
        <ContactList 
          contacts={getVisibleContacts()}
          // onDeleteContact={deleteContact}
        />
        ) : (
        <ContactList 
          contacts={contacts }
          // onDeleteContact={deleteContact}
        />
        )}
        
      </Box>
    )
}; 

  