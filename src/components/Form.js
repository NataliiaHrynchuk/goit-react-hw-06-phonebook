import React, {Component} from "react";


class Form extends Component {
    state = {
        name: '',
        number: ''
    }

    handleNameChange = event => {
        // console.log(event.currentTarget.value);
        this.setState({name:event.currentTarget.value})
    }

    handleNumberChange = event => {
        this.setState({number: event.currentTarget.value})
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        // const contact = {
        //     id: nanoid(),
        //     name: this.state.name,
        //     number: this.state.number
        // }
        // this.setState(prevState => ({
        //     contacts: [...prevState.contacts, contact],
        // }));
        this.setState({
            name: '',
            number: ''});
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
                        value={this.state.number}
                        onChange={this.handleNumberChange}/>
                </label>

                <button type="submit">Add contact</button>
            </form>

        )
    }
}

export default Form;