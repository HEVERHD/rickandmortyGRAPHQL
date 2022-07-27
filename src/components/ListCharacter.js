import React from 'react'

export const ListCharacter = ({list}) => {
  return (
    <>
    {list.length > 0 ? list.map(character => <div>{character.name}</div>) : <p>No hay personajes</p>} 
    </>
  )
}
