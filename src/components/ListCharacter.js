import React from 'react'

export const ListCharacter = ({list}) => {
  return (
    <>
    {list.length > 0 && list.map(character => (
      <character key={character.id} character={character} />
    ))}
    </>
  )
}
