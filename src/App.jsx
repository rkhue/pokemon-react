import './App.css'
import React, { useState } from 'react'
import Form from './components/FormComponent'
import PokemonList from './components/PokemonList'
import { getPokemonData, addPokemon as addPokemonToStore } from './data/pokemonData'

function App() {
  const [pokemons, setPokemons] = useState(() => getPokemonData().slice())

  const addPokemon = (pokemon) => {
    addPokemonToStore(pokemon)
    setPokemons((prev) => [...prev, pokemon])
  }

  return (
    <>
      <div className='app'>
        <h1>Formulário Pokemon</h1>
        <Form onAddPokemon={addPokemon} />
        <PokemonList pokemonData={pokemons} />
      </div>
    </>
  )
}

export default App
