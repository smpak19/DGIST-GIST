import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Courses from './pages/Courses'

function App() {
  return (
    <div className="App">
      <main className = "App-main">
        <hr/>
        <Link to ="/login">
          <button>Login</button>
        </Link>
        <Link to="/">
          <button>Main</button>
        </Link>
        <Link to ="/courses">
          <button>courses</button>
        </Link>
        <Routes>
          <Route path = "/" element = { <Main/>} />
          <Route path = "/login" element= {<Login/>} /> 
          <Route path = "/courses" element= {<Courses/>} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;
