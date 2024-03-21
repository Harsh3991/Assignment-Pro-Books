import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  const fetchBooks = () => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' }})
      .then(response => {
        setBooks(response.data.books)
        console.log(response.data.books)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
        if (error.response.status === 404) {
          console.log('404 Error! Page not found.')
        }
      })
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      {books.map(book => (
        <div className='book' key={book.id}>
          <h2>{book.title}</h2>
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <p>{book.description}</p>
          <p>{book.authors.join(', ')}</p>
        </div>
      ))}
    </div>
  )
}

export default App