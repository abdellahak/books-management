import { useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addBook } from "../store/booksSlice";


export default function AddBook(){
  const books = useSelector(state => state.books);
  const [book, setBook] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(addBook(book));
  }

  const handleChange = (e) =>{
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>

          <input type="text" name="title" placeholder="Add title..." onChange={handleChange}/>
          <input type="number" name="pages" placeholder="Add Pages..." onChange={handleChange} />
          <input type="date" name="releaseDate" placeholder="Add release Date..." onChange={handleChange} />
          <input type="text" name="ISBN" placeholder="Add ISBN..." onChange={handleChange} />
          <button>Add</button>
      </form>
    </>
  )
}