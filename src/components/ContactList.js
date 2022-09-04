import {Box} from './Box.styled';
import {Button} from './Button.styled';

export const ContactList = ({contacts, onDeleteContact}) => {
    
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


