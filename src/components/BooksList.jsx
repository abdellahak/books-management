import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/booksSlice";
import { Link } from "react-router-dom";


export default function BooksList() {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  function handleDelete(id){
    if(confirm("Are you sure to delete this book ?")){
      dispatch(deleteBook(id));
    }
  }

  return (
    <>
    
      <h1>List of books</h1>
      <table border={1} width={1000}>
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>pages</th>
            <th>release Date</th>
            <th>ISBN</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(book => 
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.pages}</td>
                  <td>{book.releaseDate}</td>
                  <td>{book.ISBN}</td>
                  <td>
                    <button onClick={()=>handleDelete(book.id)}>DELETE</button>
                    <Link to={`books/${book.id}`}>Editer</Link>
                  </td>
                </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}