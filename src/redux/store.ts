import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./reducers/counter";
import userReducer from "./reducers/user";

const store = configureStore({
    reducer: {
        counter: couterReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;