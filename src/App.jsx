import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import BooksPage from "./components/BooksPage";
import EditBook from "./components/EditBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/books/:id" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
