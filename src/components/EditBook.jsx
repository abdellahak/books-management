import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { editBook } from "../store/booksSlice";



export default function EditBook(){
  const {id} = useParams();
  const book = useSelector(state => state.books.find(book => book.id == id));
  const [formData, setFormData] = useState({
    id : '',
    title: '',
    pages: '',
    releaseDate: '',
    ISBN: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => setFormData(book), [book]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook(formData));
    navigate("/");
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <>
      <h1>Edit the book with id {id}</h1>
      <form onSubmit={handleSubmit}>
        
        <input type="text" name="title" placeholder="title..." value={formData.title} onChange={handleChange}/>
        <input type="number" name="pages" placeholder="pages..." value={formData.pages} onChange={handleChange}/>
        <input type="date" name="releaseDate" placeholder="release Date..." value={formData.releaseDate} onChange={handleChange}/>
        <input type="text" name="ISBN" placeholder="ISBN..." value={formData.ISBN} onChange={handleChange}/>
        <button>Edit Book</button>
      </form>
    </>
  )
}