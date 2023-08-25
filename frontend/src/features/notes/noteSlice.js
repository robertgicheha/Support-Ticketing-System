import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import noteService from './noteService'

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

//Get Ticket Notes
export const getNotes = createAsyncThunk(
  'notes/getAll',
  async (ticketId, thunkAPI) => {
    // console.log(ticketData)
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.getNotes(ticketId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

//Create Ticket Notes
export const createNote = createAsyncThunk(
  'notes/getAll',
  async ({ noteText, ticketId }, thunkAPI) => {
    // console.log(ticketData)
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.createNotes(noteText, ticketId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      //Get Single Ticket
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true
      })

      .addCase(getNotes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.notes = action.payload
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      })

      // Create Ticket
      .addCase(createNote.pending, (state) => {
        state.isLoading = true
      })

      .addCase(createNote.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.notes.push(action.payload)
      })
      .addCase(createNote.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      })
  },
})

export const { reset } = noteSlice.actions

export default noteSlice.reducer
