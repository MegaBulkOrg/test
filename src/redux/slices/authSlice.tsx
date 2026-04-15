import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TAuth = {
    isAuth: boolean
    authUserId: number | null
    userRoles: string | null
}

const initialState: TAuth = {
    isAuth: false,
    authUserId: null,
    userRoles: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<TAuth>){
            state.isAuth = action.payload.isAuth 
            state.authUserId = action.payload.authUserId
            state.userRoles = action.payload.userRoles
        },
        logout(state){
            state.isAuth = false 
            state.authUserId = null
            state.userRoles = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer