import './App.css';
import Register from './components/Register';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import BookCreate from './components/BookCreate';
import Navbar from './components/Navbar';
import UpdateBook from './components/UpdateBook';
import CreateReview from './components/CreateReview';
import UpdateReview from './components/UpdateReview';
import Home from './components/Home';
import Page404 from './components/Page404';
import Play from './components/Play';
import GetBooks from './components/getBooks';
import DeleteBooksById from './components/deleteBook';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <header className="App-header">
      </header>
      <Navbar/>
   
      <Routes>
        < Route path="/play" element={<Play/>} />
        < Route path="/" element={<Home/>} />
        < Route path="/home" element={<Home/>} />
        < Route path="/login" element={<Login/>} />
        < Route path="/register" element={<Register/>} />
        < Route path="/books" element={<BookCreate/>} />
        < Route path="/getBooks" element={<GetBooks/>} />
        < Route path="/updateBooks" element={<UpdateBook/>} />
        < Route path="/deleteBook" element={<DeleteBooksById/>} />
        < Route path="/review" element={<CreateReview/>} />
        < Route path="/updateReview" element={<UpdateReview/>} />
        < Route path="/*" element={<Page404/>} />
      </Routes>
     </BrowserRouter> 
     
    </div>
  );
}

export default App;
