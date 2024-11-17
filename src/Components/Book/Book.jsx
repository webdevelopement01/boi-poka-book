import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>

            <div className="card  w-96 shadow-xl p-6 bg-slate-200 ">
                <figure className='bg-blue-300 p-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, index) => <button
                            index={index} 
                            className='btn btn-xs bg-green-200 text-green-500'>{tag}</button>)


                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className=" border-t-2 border-dashed bg-slate-700"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline ">{category}</div>
                        <div className="badge ">
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;