import { createSlice, configureStore } from "@reduxjs/toolkit";
import couterReducer from "./reducers/counter";

const store = configureStore({
    reducer: {
        counter: couterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;