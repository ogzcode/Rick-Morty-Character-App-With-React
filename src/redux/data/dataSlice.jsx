import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("data/getData", async page => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    //const res = await axios.get(`http://localhost:7000/data`);
    return res.data;
});

export const getDataWithURL = createAsyncThunk("data/getDataWithURL", async (url) => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character${url}`);
    //const res = await axios.get(`http://localhost:7000/data`);
    console.log(res.data);
    return res.data;
});

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        characterData: [],
        page: 1,
        status: "idle",
        error: false
    },
    reducers: {
        nextPage: (state, action) => {
            if (state.page < 42){
                state.page += 1;
            }
        },
        prevPage: (state, action) => {
            if (state.page > 1) {
                state.page -= 1;
            }
        }
    },
    extraReducers(builder) {
        builder.
            addCase(getData.fulfilled, (state, action) => {
                state.characterData = action.payload.results;
            })
            .addCase(getData.rejected, (state, action) => {
                state.error = true;
            })
            .addCase(getDataWithURL.fulfilled, (state, action) => {
                state.characterData = action.payload.results;
            })
    }
});

export const { nextPage, prevPage } = dataSlice.actions;

export default dataSlice.reducer;