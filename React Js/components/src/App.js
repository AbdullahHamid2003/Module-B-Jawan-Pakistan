import SMButton from './components/SMButton';
import SMCard from './components/SMCard'
import SMSelect from './components/SMSelect';
import './App.css';
import SMSelect from './components/SMSelect';

function App() {

  const testing = () => {
    alert("Clicked Successfully")
  }

  const arr = [
    {
      id: 1,
      name: "Abdullah",
      age: 19,
      institute: "SAIMS",
      isActive: true,
    },
    {
      id: 1,
      name: "Abdullah",
      age: 19,
      institute: "SAIMS",
      isActive: true,
    },
    {
      id: 1,
      name: "Abdullah",
      age: 19,
      institute: "SAIMS",
      isActive: true,
    },
    {
      id: 1,
      name: "Abdullah",
      age: 19,
      institute: "SAIMS",
      isActive: true,
    },
    {
      id: 1,
      name: "Abdullah",
      age: 19,
      institute: "SAIMS",
      isActive: true,
    }
  ]

  return (
    <div>
       {/* <div>
       <h1>Components</h1>
       <SMButton buttonClick={() => {
              alert("Submitted Successfully")
            }} buttonVal="Submit" />
            <SMButton buttonClick={testing} buttonVal="Click here" />
            <SMButton buttonClick={()=>{
              prompt("What do you want to try ?")
            }} buttonVal="Try it free" />
          </div>

          <div>
            {arr.map((x, i) => {
              return (
                <Card id={x.id} name={x.name} age={x.age} institute={x.institute} isActive={x.isActive} />
              )
            })}
          </div> */}


          <div>
            <SMSelect
            label="Gender"
            options = {[
              {
                value: "male",
                displayName: "Male"
              },
              {
                value: "female",
                displayName: "Female"
              },
            ]}
            />
          </div>
    </div>
      );
}

      export default App;