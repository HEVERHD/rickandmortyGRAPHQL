import React from 'react'
import { useSelector } from 'react-redux'

export const ListCharacter = () => {
  const characterState = useSelector(state => state.character);
  console.log(characterState);
  
  return (
    <div>
        {characterState.map(character => (
          <div key={character.id}>
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
          

          </div>
        ))}
      
    </div>
  )
}
