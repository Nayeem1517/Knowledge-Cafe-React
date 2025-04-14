import './App.css'
import Blogs from './Components/Bolgs/Blogs'
import BookMarks from './Components/Book-Marks/BookMarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
