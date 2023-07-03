import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style = {{paddingBottom:"50px"}}>
          
          Join our discord server!
        </p>
        <a
          className="App-link"
          href="https://discord.com/servers/everyday-debate-1119511302839205948"
          target="_blank"
          rel="noopener noreferrer"
        >
          Everyday Debate
        </a>
      </header>
    </div>
  );
}

export default App;
