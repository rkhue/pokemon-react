import React, { useState } from 'react'
import './FormComponent.css'

const Form = () => {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonType, setPokemonType] = useState('')
  const [pokemonInfo, setPokemonInfo] = useState('')
  const [pokemonPower, setPokemonPower] = useState('')

  return (
    <form>
        <label htmlFor="pokemonName">Nome do Pokémon:</label>
        <input type="text" id="pokemonName" name="pokemonName" />
        <label htmlFor='pokemonType'>Tipo do Pokemon</label>
        <select id='pokemonType' name='pokemonType'>
            <option value='grass'>Grama</option>
            <option value='fire'>Fogo</option>
            <option value='water'>Agua</option>
            <option value='bug'>Inseto</option>
            <option value='normal'>Normal</option>
            <option value='poison'>Veneno</option>
        </select>
        <label htmlFor='pokemonInfo'>Descrição</label>
        <textarea id='pokemonInfo' name='pokemonInfo' />
        <label htmlFor='pokemonPower' name='pokemonPower'>Poder</label>
        <input type='number' id='pokemonPower' name='pokemonPower' />
        <div className='button-container'>
            <button type='reset'>Limpar</button>
            <button type='submit'>Enviar</button>
        </div>
    </form>
  )
}

export default Form