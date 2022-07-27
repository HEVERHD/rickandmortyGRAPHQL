import React from 'react'


export const ListCharacter = ({list}) => {

  return (
    <div>
      {list.map(character => (
        <div key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  )
}
