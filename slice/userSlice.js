import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


const userToken = Cookies.get("loggedin");

const initialState = {
    isLoading: false,
    error : null,
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
            const res = await fetch("http://ap.almalk.org:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(accountData),

            });
            const data = await res.json();
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

        // Login 
        [login.pending] : (state,action) => {
            state.isLoading = true;
            state.error = null;
        },

        [login.fulfilled] : (state,action) => {
            if (action.payload.passwordincorrect != null) {
                state.error = action.payload.passwordincorrect;
                state.isLoading = false;
                console.log("error", action.payload);
              }
              else if (action.payload.message) {
                
                state.error = "There was a problem We cannot find an account with that email addres";
                console.log(action.payload.error);
                 state.isLoading = false;

              }

            else {
                state.error = null
                state.isLogged = false
                state.userToken = action.payload.token 
                Cookies.set("loggedin", JSON.stringify(action.payload.token));
                console.log("action.payload",action.payload)
                state.status = true
                
                window.location.href = "/";
            }
        },
        [login.rejected] : (state,action) => {
            state.isLoading = false;
            state.error = action.payload
            console.log("Error in rejected")

        },

    }
})



export default userSlice.reducer;


