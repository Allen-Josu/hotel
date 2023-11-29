import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//  "Thunk" => access an action type string and function that returns with promise and generate a thunk dispatch  pending / fullfilled /  rejected
// based on that promise.
// thunk is not a part of slice but a saperate part of toolkit

//API using Thunk

export const fetchRestaurant = createAsyncThunk(
    "restaurantList/fetchRestaurant",
    () => {
        const result = axios
            .get(".restaurant.json")
            .then((response) => response.data);
        console.log(result);
        return result;
    }
);

const restaurantSlice = createSlice({
    name: "restaurantList",
    initialState: {
        loading: false, //pending state
        allRestaurant: [], // resolve state
        error: "", // reject
    },
    // extraReducers is used to call the API
    // builder hoists the value or response from the Thunk.
    extraReducers: (builder) => {
        //builder.addCase is used to change the value of State
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false;
            state.allRestaurant = action.payload;
            state.error = "";
        });
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false;
            state.allRestaurant = "";
            state.error = action.error.message;
        });
    },
});

export default restaurantSlice.reducer;
