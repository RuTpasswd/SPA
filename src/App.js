import './App.css';
import Navbar from './NavBar';

const title = "Welcome to my blog";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{ title }</h1>
      </div>
    </div>
  );
}

export default App;
