import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { editBook } from "../store/booksSlice";



export default function EditBook(){
  const {id} = useParams();
  const book = useSelector(state => state.books.find(book => book.id == id));
  const [formData, setFormData] = useState(book);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook(formData));
    navigate("/");
  }
  return (
    <>
      <h1>Edit the book with id {id}</h1>
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="title..." defaultValue={book.title} onChange={handleChange}/>
        <input type="text" placeholder="pages..." defaultValue={book.pages} onChange={handleChange}/>
        <input type="text" placeholder="release Date..." defaultValue={book.releaseDate} onChange={handleChange}/>
        <input type="text" placeholder="ISBN..." defaultValue={book.ISBN} onChange={handleChange}/>
        <button>Edit Book</button>
      </form>
    </>
  )
}