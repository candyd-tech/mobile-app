import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types";

const initialState: UserType = {
    uid: undefined,
    email: undefined,
    username: undefined,
    fullname: undefined,
    photoUrl: undefined,
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialState
    },
    reducers: {
        setUid: ( state, action: PayloadAction<string> ) => {
            state.value.uid = action.payload
        },
        setUserValue: (state, action: PayloadAction<UserType>) => {
            state.value = {
                ...state.value,
                uid: action.payload.uid,
                email: action.payload.email,
                username: action.payload.username,
                fullname: action.payload.fullname,
                photoUrl: action.payload.photoUrl,
            }
        }
    }
})

const userReducer = userSlice.reducer

export const { setUid, setUserValue } = userSlice.actions
export default userReducer;