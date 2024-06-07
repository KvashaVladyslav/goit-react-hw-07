import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        (state.loading = true), (state.error = false);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.error = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.error = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectContacts = (state) => state.contacts.items;
export default contactSlice.reducer;
