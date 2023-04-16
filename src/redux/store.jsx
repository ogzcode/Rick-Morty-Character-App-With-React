import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data/dataSlice";

export default configureStore({
    reducer: {
        data: dataReducer
    }
});