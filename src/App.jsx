import React, {Component} from 'react';
import ContactForm from './components/ContactForm';
import {ContactList} from 'components/ContactList';
import { nanoid } from 'nanoid';
import {Box} from './components/Box.styled';
import Filter from './components/Filter';


class App extends Component {
  state = {
    contacts: [],
    filterContacts: [],
    name: '',
  }

  
  addContact = (data) => {
    const { name, number} = data;
    const namesArray = this.state.contacts.map(contact => 
      contact.name)
    
      if (namesArray.includes(name)) {
        alert(`${name} is already in contacts.`)
      } else {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
  
        this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
      }
  }

  findeContact = (name) => {
    this.setState({filterContacts: this.state.contacts.filter(contact => 
      contact.name.toUpperCase().includes(name.toUpperCase()))})
  }
    
  

  deleteContact = contactId => {
    this.setState(prevState => ({
      filterContacts: prevState.filterContacts.filter(filterContact => filterContact.id !== contactId),
    }))
  }


  render() {
    return (
      <Box pad="20px">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter onChange={this.findeContact} />
        <ContactList 
          contacts={this.state.filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </Box>
      
    )
  }
}; 
  

  export default App;