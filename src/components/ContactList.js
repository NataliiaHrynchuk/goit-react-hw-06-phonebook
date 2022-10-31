import PropTypes from 'prop-types';
import {Box} from './Box.styled';
import { Button } from './Button.styled';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';

export const ContactList = ({onDeleteContact}) => {
    const contacts = useSelector(getContact);
        return (
            <Box 
                as="ul"
                pad="0">
                {contacts && contacts.map(({id, name, number}) => (
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
                            onClick={() => onDeleteContact(id) }
                        >Delete
                        </Button>
                    </Box>
                ))}
            </Box>
        )
    }

    ContactList.propTypes = {
        contacts: PropTypes.array,
        onDeleteContact: PropTypes.func,
    }

