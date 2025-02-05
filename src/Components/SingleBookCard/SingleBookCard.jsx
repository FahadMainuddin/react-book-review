import { useLoaderData, useParams } from "react-router-dom";


const SingleBookCard = () => {
    const books =useLoaderData()
    console.log("Single Book Data", book)
    const {bookId} = useParams()
    const book = Array.isArray(books) && books.find((book) => book.id.toString() === bookId);
    console.log(books, bookId, book )
    // console.log("Loader Data:" ,SingleBookCard)

    // Handle the case where the book is not found
    if (!book) {
      return <p>Book not found!</p>;
  }

    const {bookName, author,  }= book;
    return (
        <div className="card card-side  shadow-xl w-[1140px] h-[710px] ml-52">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default SingleBookCard;