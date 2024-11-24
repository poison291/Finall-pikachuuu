import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Pokemon() {
  const location = useLocation()
  const {pokemon, id} = location.state
  console.log(pokemon);
  
  return (
  <>
    <div className="bg-gray-800 h-lvh">
      <div className="">

        <div className="text-white">
      <h1>{pokemon.name}</h1>
        </div>
      </div>
    </div>
  </>
  )
}
