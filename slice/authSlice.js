import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jwt from "jsonwebtoken";
import axios from 'axios';
import Cookies from "js-cookie";

// Create an async thunk to handle the sign-in process
export const signIn = createAsyncThunk('auth/signIn', async ({ email, password }) => {
  var response = await axios.post('https://almalik-application.onrender.com/api/jwt/create', {
    email,
    password,
  });
  var decodedToken = jwt.decode(response.data.access);
  var user_account_id =decodedToken.user_id;
  var responseProfile = await axios.get(`https://almalik-application.onrender.com/api/profiles/${user_account_id}`,{
    headers:{
      Authorization: 'Bearer '+response.data.access
    }
  });
  const data={
    access:response.data.access,
    refresh:response.data.refresh,
    profile:responseProfile.data
  }
  
  return data;
});


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    profile:null,
    userId: null,
    token: null,
    loading: false,
    error: null,
    refresh:null,
  },
  reducers: {
    clearAuthState: (state) => {
      state.profile=null;
      state.userId = null;
      state.token = null; 
      state.loading = false;
      state.error = null;
      state.refresh=null;
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const { refresh, access, profile} = action.payload;
        // console.log(profile)
        // Decode the access token to extract user ID
        // console.log('access');
        // console.log(access);
        state.refresh=refresh;
        const decodedToken = jwt.decode(access);
        // console.log('decodedtoken');
        // console.log(decodedToken);
        state.userId = decodedToken.user_id;
        // console.log('userID')
        // console.log(state.userId)
        state.profile=profile;
        state.token = access;
        state.loading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearAuthState } = authSlice.actions;
export default authSlice.reducer;
