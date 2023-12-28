import { createSlice } from '@reduxjs/toolkit'
import { dummyEmployees } from './dummyData'

const initialState = {
  admins: [...dummyEmployees],
}

export const adminSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {
    createAdmin: (state,action) => {
        state.admins.push(action.payload);
    },
    listAdmin: (state) => {
        return state.admins;
    },
    deleteAdmin: (state, action) => {
        const adminIdToDelete = action.payload;
        state.admins = state.admins.filter((admin) => admin.id !== adminIdToDelete);
    },
    editAdmin:(state,action)=>{
        const { id, updatedAdminData } = action.payload;
        const index = state.admins.findIndex((admin) => admin.id === id);
        if (index !== -1) {
          state.admins[index] = { ...state.admins[index], ...updatedAdminData };
        }
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { createAdmin,listAdmin,deleteAdmin,editAdmin } = adminSlice.actions

export default adminSlice.reducer