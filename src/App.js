import './App.css'
import yalla from './logo.svg'
import Nav from './Components/NavBar'
import {Card,a} from './Components/Card'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const firstNAme = 'Wael';
  const LAstNAme = 'Karaa';
  const tab = [1,56,23,6]
  //const ooo= {color:'red',textAlign:'center'}
  return (
    <div className="App">
      <Nav/>
      <h1>this is a intro of React</h1>
      <h2>{firstNAme} {LAstNAme}</h2>
      {tab.map(el=> <ul>
        <li>{el}</li>
      </ul>)}
      <Card/>
      <p>I am {a} years old</p>
      <div>
        {/* importing images using public */}
        <img style={{width:'50%'}} src={'./images/logo512.png'} alt='image1' />
        {/* importing images using SRC */}
        <img style={{width:'50%'}} src={yalla} alt='image1' />

      </div>
    </div>
  );
}

export default App;
