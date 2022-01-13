import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <main className = "App-main">
        <Routes>
          <Route path = "/" element = { <Main/>} />
          <Route path = "/login" element= {<Login/>} /> 
        </Routes>
        <hr/>
        <Link to ="/login">
          <button>Login</button>
        </Link>
        <Link to="/">
          <button>Main</button>
        </Link>
      </main>
    </div>
  );
}

export default App;
