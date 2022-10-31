import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./action";
import { contactInitialState, filterInitialState } from "./constatnts";

export const contactsReducer = createReducer(contactInitialState, {
    [addContact]: (state, action) => {
        // return [...state, action.payload];
        state.push(action.payload);
    },
    [deleteContact]: (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
    },
});

export const filterReducer = createReducer(filterInitialState, {

})