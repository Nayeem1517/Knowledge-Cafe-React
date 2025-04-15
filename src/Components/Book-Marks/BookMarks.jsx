import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 gap-4 ml-4 mt-2'>
            <div className='text-4xl font-bold text-red-500 text-center rounded-xl m-4 p-4 '>
                <h2 className='text-4xl'>Reading Time :{readingTime}</h2>
            </div>
            <h2 className='text-3xl text-center ' >BooksMarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <BookMark key={bookmark.id}
                bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;