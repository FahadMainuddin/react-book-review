// import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from "./Components/Root/Root";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/Home/Home';
import Listed from './Components/Listed/Listed';
import ReadPages from "./Components/ReadPages/ReadPages";
import SingleBookCard from './Components/SingleBookCard/SingleBookCard';
import booksData from "./Components/Data/BooksData.json"



// Loader function to fetch a single book by ID

const bookLoader = async ({ params }) => {
  console.log ("Loader Params:" ,params)
  const {bookId} =params;

  if (!bookId) {
    console.error("Error: bookId is undefined.");
    return null; // Prevent further execution
}
console.log("BookData:", booksData);

if (!Array.isArray(booksData)) {
  console.error("Error: booksData is not an array.");
  return null;
}

 // Load all books
 const book = booksData.find((book) => book.bookId.toString() === params.bookId);
 console.log("Found Book:", book);
  return book || null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
     {
      index: true,
      element: <Home></Home>
     },
      {
        path: "/listed",
        element: <Listed></Listed>
      },
      {
        path:"/singleBook/:bookId",
        element:<SingleBookCard></SingleBookCard>,
        loader:  bookLoader,

      },
      {
        path:"/pages",
        element: <ReadPages></ReadPages>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
