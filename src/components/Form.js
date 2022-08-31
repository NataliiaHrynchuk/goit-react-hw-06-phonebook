import React from "react";

class Form extends React.Component {
    state = {
        contacts: [],
        name: ''
    }

    handleNameChange = event => {
        // console.log(event.currentTarget.value);
        this.setState({name:event.currentTarget.value})
    }

    handleContactsChange = event => {
        this.setState({contacts: event.currentTarget.value})
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name <input 
                    type="text"
                    name="name" 
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleNameChange} />
                </label>

                <label>
                    Number <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.contacts}
                        onChange={this.handleContactsChange}/>
                </label>

                <button type="submit">Add contact</button>
            </form>

        )
    }
}

export default Form;