import React from 'react'
import { Button } from './Button.elemtens';
import CharactersQuery from './Characters';




const Generate = () => {
  return (
    <div className="generate">
      <Button onClick={
        () => {
          CharactersQuery();
        }
      }>Generate</Button>
    </div>
  )
}
 

export default Generate;