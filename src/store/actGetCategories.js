import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const actGetCategories = createAsyncThunk("categories/actGetCategories", async(_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
try {

    const response = await axios.get("http://localhost:5005/categories");

    return response.data;
} catch (error) {
    if (axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data.message || error.message);
    } else {
        return rejectWithValue("An unexpected error");
    }
}
});

export default actGetCategories;