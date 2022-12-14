import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import axios from 'axios';
axios.defaults.baseURL = 'https://639971e516b0fdad773ce5ba.mockapi.io/api';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const addContact = createAsyncThunk(
    "tasks/addContact",
    async ({ name, phone, id }, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { name, phone, id: nanoid() });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
