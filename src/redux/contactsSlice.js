import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items = [action.payload, ...state.items];
      },
      prepare: (userInfo) => {
        return {
          payload: {
            id: crypto.randomUUID(),
            userInfo,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      },
    },
  },
});

export const selectContacts = (state) => state.contacts.items;
export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
