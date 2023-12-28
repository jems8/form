import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dummyEmployees } from "./dummyData";

export const fetchEmployees = createAsyncThunk("employee/fetchEmployees", async () => {
  return dummyEmployees; 
});

const initialState = {
  employees: [],
  status: "idle",
  error: null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    createEmployee: (state, action) => {
      state.employees.push(action.payload);
    },

    listEmployee: (state) => {
      return state.employees;
    },

    deleteEmployee: (state, action) => {
      const employeeIdToDelete = action.payload;
      state.employees = state.employees.filter(
        (employee) => employee.id !== employeeIdToDelete
      );
    },

    editEmployee: (state, action) => {
      const { id, updatedEmployeeData } = action.payload;
      const index = state.employees.findIndex((employee) => employee.id === id);
      if (index !== -1) {
        state.employees[index] = {
          ...state.employees[index],
          ...updatedEmployeeData,
        };
      }
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { createEmployee, listEmployee, deleteEmployee, editEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;