import { useEffect, useState } from 'react';
import booksData from '../Data/BooksData.json'
import BookCard from '../BookCard/BookCard';

const BooksItems = () => {

 const [books, setBooks] = useState([]);
 useEffect(() => {
    // console.log(booksData)
  setBooks(booksData)
 }, []);
 

    return (
        <div>
            <div>
            <h1 className="text-5xl font-bold  mt-20 mb-10 text-center">Books: {books.length}</h1>
            </div>

        

    
   < div className='grid grid-cols-3  w-[1170px]  h-[554px]  ml-52'>
    {
      books.map(book => <BookCard key={book.bookId} book={book} ></BookCard>)  
    }
   
   </div>


    </div>
        
    );
};

export default BooksItems;