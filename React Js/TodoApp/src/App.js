import react, { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  let add = () => {
    list.push(text);
    console.log(list)
    setList([...list]);
    setText("");
  }

  let del = (i) => {
    list.splice(i, 1);
    setList([...list]);
  }

  let edit = (i) => {
    let a = prompt("Enter value");
    list[i] = a;
    setList([...list]);
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }} />
      <button onClick={add}>Add</button>

      {
        list.map((x, i) => {
          return(
          <p key={i}>
            {x}
            <button onClick={() => del(i)}>Delete</button>
            <button onClick={() => edit(i)}>Edit</button>
          </p>)
        })
      }

    </div>
  );
}

export default App;
