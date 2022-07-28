import React from 'react'
import { Button } from './Button.elemtens'

export const Error = () => {
  return (
    <div className='load'>
    <img src="https://c.tenor.com/jwAkhSG3BWEAAAAC/error.gif" alt="error"/>
      <Button onClick={() => window.location.reload()}>
        Try again
      </Button>
    </div>
  )
}
