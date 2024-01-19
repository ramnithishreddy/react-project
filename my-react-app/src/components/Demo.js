import React from 'react'

export default function Demo({name}) {
  return (
    <div data-testid="section">
        <h1>Demo</h1>
        <h5 id='user'>{name}</h5>
    </div>
  )
}
