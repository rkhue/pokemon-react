import React, { useState } from 'react'
import './FormComponent.css'

const Form = () => {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonType, setPokemonType] = useState('')
  const [pokemonInfo, setPokemonInfo] = useState('')
  const [pokemonPower, setPokemonPower] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      name: pokemonName,
      type: pokemonType,
      info: pokemonInfo,
      power: pokemonPower
    }
    console.log('Form Data Submitted: ', formData)
    alert('Pokémon enviado com sucesso!')
  }

  return (
    <form onSubmit={handleSubmit}>
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