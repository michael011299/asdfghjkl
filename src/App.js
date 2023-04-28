import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Nav from "./Nav";


function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const change = (e) => {
    const a = Number.parseInt(e.target.innerText);
    setHistory([`${count} ${a > 0 ? "+" : ""} ${a} = ${count + a}`, ...history]);
    setCount(count + a);
  };

  return (
    <div className='App'>
      <Nav/>
      <div id="counter">
        <h2>Count: {count}</h2>
        <Button id="button" variant="primary" onClick={change}>-10</Button>
        <Button id="button" variant="secondary" onClick={change}>-5</Button>
        <Button id="button" variant="success" onClick={change}>-1</Button>
        <Button id="button" variant="warning" onClick={() => {setCount(0); setHistory([])}}>Reset</Button>
        <Button id="button" variant="info" onClick={change}>+1</Button>
        <Button id="button" variant="dark" onClick={change}>+5</Button>
        <Button id="button" variant="light" onClick={change}>+10</Button>
      </div>
      <div id="history">
      <h2>History</h2>
        {history.map((i) => (
          <p>{i}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
