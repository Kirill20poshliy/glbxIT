import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UsersState } from '../types/types'

const initialState: UsersState = {
  searchQuery: '',
  userModal: false,
  actualUser: '',
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    setQuery(state, actions: PayloadAction<string>): void {
      state.searchQuery = actions.payload
    },

    switchModal(state): void {
      state.userModal = state.userModal ? false : true
    },

    setActualUser(state, actions: PayloadAction<string>): void {
      state.actualUser = actions.payload
    },

    deleteActualUser(state) {
      state.actualUser = ''
    },

  }
})


export const {
  setQuery,
  switchModal,
  setActualUser,
  deleteActualUser,
} = usersSlice.actions

export default usersSlice.reducer