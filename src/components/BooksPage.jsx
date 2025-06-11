import { Link } from "react-router-dom";
import AddBook from "./AddBook";
import BooksList from "./BooksList";


export default function BooksPage(){

  return (
    <>
      <AddBook />
      <BooksList />
    </>
  )
}