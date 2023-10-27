// import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Router from './Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Link to="/pageA">pageA</Link>
        <Link to="/pageB">pageB</Link>
        <Link to="/pageC">pageC</Link>
        <Router />
      </header>
    </div>
  );
}

export default App;
