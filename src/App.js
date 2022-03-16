import logo from './logo.svg';
import './App.css';



function App() {
  const personData = [
    {
      name:"Dipta Saha",
      ocupation: "Jr. Web Developer",
      salary:"$280k"
      
    },
    {
      name:"Keya Saha",
      ocupation: "House Wife",
      salary:"$80k"
      
    },
    {
      name:"Tanuruchi Saha",
      ocupation: "Computer Engineer",
      salary:"$120k"
      
    },
    {
      name:"Gouri Saha",
      ocupation: "Arch",
      salary:"$115k"
      
    },
    {
      name:"Dipannita Saha",
      ocupation: "Fashion Designer",
      salary:"$125k"
      
    }
  ];
  // personData.map(person => console.log(person.name))
  return (
    <div className='main-container-style'>
      {
        personData.map(({name,ocupation,salary}) => <Person name={name}  ocupation={ocupation} salary={salary}></Person>)
      }
    </div>
  );
}

function Person({name,ocupation,salary}){
  return (
    <div className='container'>
      <h3>{name}</h3>
      <p>Post: {ocupation}</p>
      <p>Salary: {salary}</p>
    </div>
  );
}



export default App;
