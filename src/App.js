import './App.css';
import { createStore } from 'redux';
import DataHandler from './Components/dataHandler';
import data from './data';
import pokemons from './data';


function App() {
  return (
    <div className="App">
     <DataHandler pokeInformation={pokemons}/>
    </div>
  );
}

export default App;
