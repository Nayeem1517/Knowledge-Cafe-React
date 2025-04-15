import { useState } from 'react'
import './App.css'
import Blogs from './Components/Bolgs/Blogs'
import BookMarks from './Components/Book-Marks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] =useState([]);
  const [readingTime , SetReadingTime]=useState(0);

  const handleMarkAsRead = time => {
   const newReadingTime = readingTime + time;
   SetReadingTime(newReadingTime)
  }

  const handleAddToBookmark = blog => {
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <BookMarks bookmarks={bookmarks}
      readingTime={readingTime}></BookMarks>
      </div>
    </>
  )
}

export default App
