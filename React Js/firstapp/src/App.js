import { useState } from 'react';
import './App.css';

function App() {
  // let a = 10;
  // let b = 12;
  // let arr = [
  //   {
  //     name: "Abdullah",
  //     id: 1,
  //   },
  //   {
  //     name: "Sameer",
  //     id: 2,
  //   },
  //   {
  //     name: "Umair",
  //     id: 3,
  //   },

  // ]

  // const [name, setName] = useState("Sameer");
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  // let updateName = () => {
  //   setName("Abdullah");
  // }
  // let updateCount = () => {
  //   setCount(10);
  // }

  let add = () => {
    list.push(text);
    setList(...list);
    setText("");
  }

  let del = (i) => {
    list.splice(i,1);
    setList([...list]);
  }

  let edit = (i) => {
    let a = prompt("Enter value");
    list[i] = a;
    setList([...list]);
  }

  return (
    <div>

      {/* <p>the value of a is {a}</p>
      <p>The value of b is {b} and its square is {b * b}</p>
      {arr.map((x, i) => {
          return (
            <div className='card' key={i}>
              <p style={{
                fontSize: 20,
                fontWeight:"bold",
                color: "black",
              }}>{x.name}</p>
              <p>{x.id}</p>
            </div>
          )
        })
      } */}

      {/* <p>{name}</p>
      <button onClick={updateName}>Update Name</button>
      <p>{count}</p>
      <button onClick={updateCount}>Update Count</button> */}

      <p>{text}</p>
      <input 
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }} />
      <button onClick={add}>Add</button>

      {list.map((x,i)=>{
        <p key={i}>
          {x}
          <button onClick={() => del(i)}></button>
          <button onClick={() => edit(i)}></button>
          </p>
      })}

    </div>
  );
}

export default App;







