import React, {Component} from "react";
import {Box} from './Box.styled';
import {Label} from './Label.styled';
import {Text} from './Text.styled';
import {Button} from './Button.styled';


class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleNameChange = event => {
        this.setState({name:event.currentTarget.value})
    }

    handleNumberChange = event => {
        this.setState({number: event.currentTarget.value})
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: '',
            number: ''});
    }

    render() {
        const {name, number} = this.state;
        
        return (
            <Box 
                as="form"
                border="0.5px solid rgb(112, 111, 111)"
                display="inline-block"
                w="200px" 
                pad="20px 250px 20px 20px"
                onSubmit={this.handleSubmit}
                >
                <Label htmlFor="id-name">
                    Name </Label>
                <Text 
                    type="text"
                    name="name" 
                    id="id-name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    mt="10px"
                    mb="10px"
                    onChange={this.handleNameChange}
                    />
                
                <Label htmlFor="id-number">
                    Number </Label>
                <Text
                        type="tel"
                        name="number"
                        id="id-numder"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleNumberChange}
                        mt="10px"
                        mb="10px"
                        mr="120px"/>
                

                <Button type="submit">Add contact</Button>
            </Box>

        )
    }
}

export default ContactForm;