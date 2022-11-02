import React from 'react';
import ContactForm from './components/ContactForm';
import {ContactList} from 'components/ContactList';
import {Box} from './components/Box.styled';
import  {Filter}  from './components/Filter';


export default function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  

  return (
      <Box pad="20px">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </Box>
    )
}; 

  