// import React, {Component} from "react";

export const ContactList = ({contacts}) => {
    
        return (
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name}:{contact.number}
                    </li>
                ))}
                
            </ul>
        )
    }



// export const StatList = ({items}) => {
   
//     return (<List>
//         {items.map(item => ( 
//             <Item key={item.id} >
//                 <Label>{item.label}</Label>
//                 <Percentage>{item.percentage}%</Percentage>
//             </Item>
//         ))}
//     </List>);
//     };