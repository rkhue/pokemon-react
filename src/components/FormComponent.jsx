import React, { useState } from 'react'
import './FormComponent.css'

const Form = ({ onAddPokemon }) => {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonType, setPokemonType] = useState('normal')
  const [pokemonInfo, setPokemonInfo] = useState('')
  const [pokemonPower, setPokemonPower] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const pokemon = {
      name: pokemonName,
      type: pokemonType,
      info: pokemonInfo,
      power: pokemonPower === '' ? 0 : Number(pokemonPower)
    }
    console.log('Dados enviados: ', pokemon)
    alert('Pokémon enviado com sucesso!')
    if (typeof onAddPokemon === 'function') {
      onAddPokemon(pokemon)
    } else {
      console.warn('onAddPokemon not provided — pokemon not added to store')
    }
  }

  const handleReset = (event) => {
    event.preventDefault()
    setPokemonName('')
    setPokemonType('')
    setPokemonInfo('')
    setPokemonPower('')
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
        <label htmlFor="pokemonName">Nome do Pokémon:</label>
        <input type="text" id="pokemonName" name="pokemonName" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
        <label htmlFor='pokemonType'>Tipo do Pokemon</label>
        <select id='pokemonType' name='pokemonType' value={pokemonType} onChange={(e) => setPokemonType(e.target.value)}>
            <option value='grass'>Grama</option>
            <option value='fire'>Fogo</option>
            <option value='water'>Agua</option>
            <option value='bug'>Inseto</option>
            <option value='normal'>Normal</option>
            <option value='poison'>Veneno</option>
            <option value='electric'>Eletrico</option>
            <option value='psychic'>Psiquico</option>
            <option value='rock'>Pedra</option>
            <option value='ground'>Terra</option>
        </select>
        <label htmlFor='pokemonInfo'>Descrição</label>
        <textarea id='pokemonInfo' name='pokemonInfo' value={pokemonInfo} onChange={(e) => setPokemonInfo(e.target.value)} />
        <label htmlFor='pokemonPower' name='pokemonPower'>Poder</label>
        <input type='number' id='pokemonPower' name='pokemonPower' value={pokemonPower} onChange={(e) => setPokemonPower(e.target.value)} />
        <div className='button-container'>
            <button type='reset'>Limpar</button>
            <button type='submit'>Enviar</button>
        </div>
    </form>
  )
}

export default Form