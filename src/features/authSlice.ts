import { RootState } from '@/app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'

type AuthState = {
  currentUser: User | null
  error: null | string
}

const initialState: AuthState = {
  currentUser: null,
  error: null,
}

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setError: (state, action: PayloadAction<null | string>) => {
      state.error = action.payload
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload
      state.error = null
    },
    signOutUser: state => {
      state.currentUser = null
    },
  },
})

export const { setError, setUser, signOutUser } = authSlice.actions
export const authReducer = authSlice.reducer

export const selectUser = (state: RootState) => state.auth.currentUser
export const selectError = (state: RootState) => state.auth.error
