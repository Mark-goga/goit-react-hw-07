import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66a119e17053166bcabe0049.mockapi.io/";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const addContact = createAsyncThunk('contacts/addContact',
  async (value, thunkAPI) => {
    try {
      const response = await axios.post('contacts' , value);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

export const deleteContact = createAsyncThunk('contacts/deleteContact',
  async (contactsID, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${contactsID}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });