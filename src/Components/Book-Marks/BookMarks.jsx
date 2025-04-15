import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2'>
            <h2 className='text-3xl text-center ' >BooksMarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <BookMark key={bookmark.id}
                bookmark={bookmark}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;