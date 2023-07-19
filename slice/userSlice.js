import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";


const userToken = Cookies.get("loggedin");

const initialState = {
  isLoading: false,
  error : null,
  data:null,
  status : null,
  isLogged : false,
  isSignUp : false,
  userToken,
}

// Login
export const login = createAsyncThunk(
  "user/login",
  
    async(accountData,thunkAPI)=>{

        const {rejectWithValue} = thunkAPI;

        try {
            const res = await fetch("https://almalik-application.onrender.com/api/jwt/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(accountData),

            });
            const data = await res.json();
            // Cookies.set("id", data._id);
            Cookies.set("token", data.access);
            
            return data;
          } catch (error) {
            
            return rejectWithValue(error.message);
          }

    }
)


const userSlice = createSlice({
    name : "user",
    initialState,
    reducers :{
    },
    extraReducers: { 
      [login.pending]: (state, action) => {
        state.isLoading = true;
      },
      [login.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.userToken = action.payload.token 
        state.error = null
        state.isLoading = false;
        state.status=true;
        console.log("action.payload : \n",action.payload);
        if(action.payload.success != false){
          console.log("action.payload : \n",action.payload);
          Cookies.set("loggedin", JSON.stringify(action.payload.token));
          const decodedToken = jwt.decode(action.payload.token);
          console.log("decodedToken", decodedToken);
          Cookies.set("id", decodedToken.id);
         // Cookies.set("name", decodedToken.name);
          console.log(action.payload);
        }
        if(action.payload.success != true){
          state.error = "There was a problem We cannot find an account with that email addres";
          window.location.href = '/signin';
        }
      },
      [login.rejected]: (state, action) => {
        state.error = "error";
        state.isLoading = false;
      },

        // // Login 
        // [login.pending] : (state,action) => {
        //     state.isLoading = true;
        //     state.error = null;
        // },

        // [login.fulfilled] : (state,action) => {
        //     if (action.payload.passwordincorrect != null) {
        //         state.error = action.payload.passwordincorrect;
        //         state.isLoading = false;
        //         console.log("error", action.payload);
        //       }
        //       else if (action.payload.message) {
                
        //         state.error = "There was a problem We cannot find an account with that email addres";
        //         console.log(action.payload.error);
        //          state.isLoading = false;

        //       }

        //     else {
        //         state.error = null
        //         state.isLogged = false
        //         state.userToken = action.payload.token 
        //         Cookies.set("loggedin", JSON.stringify(action.payload.token));
        //         console.log("action.payload",action.payload)
        //         state.status = true
                
        //         window.location.href = "/signin";
        //     }
        // },
        // [login.rejected] : (state,action) => {
        //     state.isLoading = false;
        //     state.error = action.payload
        //     console.log("Error in rejected")

        // },

    }
})



export default userSlice.reducer;


