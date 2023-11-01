import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard'
import Home from './Home'

function App() {
  return (
    <div>
      <div className="App">
        <Home></Home>
      </div>
      <div>
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
