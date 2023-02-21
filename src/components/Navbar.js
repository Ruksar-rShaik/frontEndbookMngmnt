import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
      
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/login">Login</Link></li>
            <li><Link className="dropdown-item" to="/register">Register</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Books
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/books">Create book</Link></li>
            <li><Link className="dropdown-item" to="/getBooks">Fetch books</Link></li>
            <li><Link className="dropdown-item" to="/updateBooks">UpdateBook</Link></li>
            <li><Link className="dropdown-item" to="/deleteBook">DeleteBook</Link></li>
          </ul>
        </li>   <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Reviews
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/review">Create review</Link></li>
            <li><Link className="dropdown-item" to="/updateReview">update review</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
