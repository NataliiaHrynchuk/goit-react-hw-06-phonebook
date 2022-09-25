import React from "react";
import { useState } from "react";
import {Box} from './Box.styled';
import {Label} from './Label.styled';
import {Text} from './Text.styled';
import {Button} from './Button.styled';


export default function ContactForm () {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    // state = {
    //     name: '',
    //     number: ''
    // }

    const handleChange = event => {
        const {name, value} = event.currentTarget;
        switch(name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }

    // const handleNumberChange = event => {
    //     setNamber(event.currentTarget.value);
    // }
    
    const handleSubmit = event => {
        event.preventDefault();
        // this.props.onSubmit(this.state);
        return Object({name, number});
        
    }

    // render() {
    //     const {name, number} = this.state;
        
        return (
            <Box 
                as="form"
                border="0.5px solid rgb(112, 111, 111)"
                display="inline-block"
                w="200px" 
                pad="20px 250px 20px 20px"
                onSubmit={handleSubmit}
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
                    onChange={handleChange}
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
                        onChange={handleChange}
                        mt="10px"
                        mb="10px"
                        mr="120px"/>
                

                <Button type="submit">Add contact</Button>
            </Box>

        )
    }


