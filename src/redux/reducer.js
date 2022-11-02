import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./action";
import { contactsInitialState, filterInitialState } from "./constants";

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
        // return [...state, action.payload];
        state.push(action.payload);
    },
    [deleteContact]: (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
    },
});

export const filterReducer = createReducer(filterInitialState, {
    [setFilter]: (state, action) => {
        state = action.payload;
}
})