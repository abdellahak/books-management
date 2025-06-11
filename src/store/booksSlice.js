import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    id : 1,
    title : "Clean code",
    pages : 100,
    releaseDate : "2025-06-19",
    ISBN : "TU21"
  },
  {
    id : 2,
    title : "JavaScript: The Good Parts",
    pages : 176,
    releaseDate : "2008-05-01",
    ISBN : "978-0596517748"
  },
  {
    id : 3,
    title : "You Don't Know JS",
    pages : 278,
    releaseDate : "2014-07-27",
    ISBN : "978-1491904244"
  },
  {
    id : 4,
    title : "Eloquent JavaScript",
    pages : 472,
    releaseDate : "2018-12-04",
    ISBN : "978-1593279509"
  },
  {
    id : 5,
    title : "Design Patterns",
    pages : 395,
    releaseDate : "1994-10-21",
    ISBN : "978-0201633610"
  }
];

const booksSlice = createSlice({
  initialState,
  name : "books",
  reducers : {

    addBook : (state, action) => {
      const newId = Math.max(...state.map(book => book.id), 0) + 1;
      state.push({ ...action.payload, id: newId });
    },

    editBook : (state, action) => state = state.map((book) => book.id == action.payload.id ? action.payload : book),

    deleteBook : (state, action) => state = state.filter((book) => book.id != action.payload) 

  }
});

export const {addBook, editBook, deleteBook} = booksSlice.actions;

export default booksSlice.reducer;