import { createAction, nanoid } from "@reduxjs/toolkit";
export const addContact = createAction("contacts/addContact", ({name, number}) => {
    return {
        payload: {
            name,
            number,
            id: nanoid(),
        }
    }
});
console.log(addContact.payload);

export const deleteContact = createAction("contacts/deleteContact");