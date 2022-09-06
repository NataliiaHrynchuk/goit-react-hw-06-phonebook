import React, {Component} from 'react';
import ContactForm from './components/ContactForm';
import {ContactList} from 'components/ContactList';
import { nanoid } from 'nanoid';
import {Box} from './components/Box.styled';
import {Filter} from './components/Filter';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  createNewContact = (newContact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }))
  };

  addContact = (data) => {
    const { name, number} = data;
    const {contacts} = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
  }; 
    console.log(contacts);
    contacts.length > 0 
      ? (
      (contacts.find(contact => contact.name === name)) 
        ? (
          alert(`${name} is already in contacts.`))
        : this.createNewContact(newContact)
        ) 
      : (
          this.createNewContact(newContact)
        );
      
  }
      

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value});
  };

  getVisibleContacts = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = contactId => {
      this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }


  render() {
    const {filter, contacts} = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box pad="20px">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter 
          value={filter}
          onChange={this.changeFilter} />
        {filter ? (
        <ContactList 
          contacts={visibleContacts }
          onDeleteContact={this.deleteContact}
        />
        ) : (
        <ContactList 
          contacts={contacts }
          onDeleteContact={this.deleteContact}
        />
          )}
        
      </Box>
    )
  }
}; 

  export default App;