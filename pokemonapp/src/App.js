import { useEffect, useState } from 'react';
import './App.css';
import { PokemonCard } from './Component/PokemonCard';
import { type , getListOfPokemonType   , getAllPokemonTypes } from './Helper/helper.js'


function App() {

  const [pokemon , setPokemon] = useState([])
  const [searchPokemonType , setSearchPokemonType] = useState("");


 function getPokemon(){

  fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
  .then((res) => res.json())
  .then((pokemon) => setPokemon(pokemon))
  .catch((err) => console.log(err))

  }

  useEffect(getPokemon,[])




  function onSubmit(e){
    e.preventDefault();

    const person = { searchPokemonType }
    console.log(person) 


  }


  let poke = getAllPokemonTypes(pokemon.pokemon , 'type');
  let listOfType = getListOfPokemonType(pokemon.pokemon , searchPokemonType)


  {
    console.log(pokemon.pokemon)
  }


 
  return (
    <div className="App container">
      <h1 className='appTitle'>POKEMON</h1>
      <form onSubmit={onSubmit} >
         {/* // Pokemon Name */}
      <label htmlFor='Name'>Filter By Type</label>
        <select value={searchPokemonType} onChange={(e) => setSearchPokemonType(e.target.value)} className='form-select'>
          <option value={poke} >All</option>
          {
            type.map((item , index) =>{
              return <option  key={index} value={item}>{item}</option>
            })
          }
        </select>
        {       
        console.log(listOfType)
        }


      <button className='btn btn-primary' type="submit">Submit</button>
      </form>


      <ul> 
        {
          listOfType.map((item) => {
           return <li key={item.id}>
              <PokemonCard
               name={item.name}
                img={item.img}
                 num={item.num}
                  weakness={item.weaknesses}
                  type={item.type}  />
            </li> 
          }) 
           
        }
      </ul>

    </div>
  );
}

export default App;
