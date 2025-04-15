import { useState } from 'react'
import './App.css'
import Blogs from './Components/Bolgs/Blogs'
import BookMarks from './Components/Book-Marks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] =useState([]);
  const handleAddToBookmark = blog => {
    const newBookMarks = [...bookmarks,blog];
    setBookmarks(newBookMarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
    </>
  )
}

export default App
