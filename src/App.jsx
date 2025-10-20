import './App.css'
import Form from './components/FormComponent'
import PokemonList from './components/PokemonList'
import pokemonData from './data/pokemonData'

function App() {
  return (
    <>
      <div className='app'>
        <h1>Formulário Pokemon</h1>
        <Form />
        <PokemonList pokemonData={pokemonData} />
      </div>
    </>
  )
}

export default App
