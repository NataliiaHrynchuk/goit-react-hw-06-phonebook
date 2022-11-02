import {Box} from './Box.styled';
import { Button } from './Button.styled';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContact);
    const filter = useSelector(getFilter).toLowerCase();
    const getVisibleContacts =
        filter ?
            (contacts.filter(contact => contact.name.toLowerCase().includes(filter)))
            :
            (contacts);
        
        return (
            <Box 
                as="ul"
                pad="0">
                {getVisibleContacts && getVisibleContacts.map(({id, name, number}) => (
                    <Box 
                        key={id}
                        as="li"
                        display="flex"
                        gap="10px"
                        alIt="center"
                    >
                        <p>{name}:</p>
                        <p>{number}</p>
                        <Button 
                            type="button"
                            w="60px"
                            onClick={() => dispatch(deleteContact(id))}
                        >Delete
                        </Button>
                    </Box>
                ))}
            </Box>
        )
    }

    

