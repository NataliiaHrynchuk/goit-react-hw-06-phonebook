import React, {Component} from 'react';
import Form from './components/Form';
import {ContactList} from 'components/ContactList';
import { nanoid } from 'nanoid';


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addContact = information => {
    console.log(information);
    const contact = {
      id: nanoid(),
      name: information.name,
      number: information.number
  }
  this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
  })); 
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>
        <h2>Contacts</h2>
        {/* <Filter  />
         */}
         <ContactList contacts={this.state.contacts}/>
      </div>
      
    )
  }
}; 
  

  export default App;