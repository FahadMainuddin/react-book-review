import { MdOutlineStarOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
    // console.log(book)
    const {bookId, image, bookName, author, category, rating}= book;

    // console.log('Image:',image)
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4    w-[1170px]  h-[340px]   ">
			<Link to={`/singleBook/${bookId}`}> 
            <article className="flex flex-col dark:bg-gray-50 transition border-2 hover:scale-105 border-primary  hover:border-secondary border-opacity-30">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{bookName}</h3>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug"> By: {author}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>{category}</span>
						<div className="flex gap-2 ">
                        <span className="ml-10">{rating}</span>
                        <h1 className="text-sm text-center">< MdOutlineStarOutline></MdOutlineStarOutline></h1>
                        </div>
					</div>
				</div>
			</article>
            </Link>
			
		</div>
	</div>
</section>

    );
};

export default BookCard;