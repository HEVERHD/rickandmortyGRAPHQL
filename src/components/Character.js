import React from 'react'


const Character = ({character}) => {
  return (
    <div>
        <h1>{character.name}</h1>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.type}</p>
        <p>{character.origin.name}</p>
    </div>
  )
}

export default Character