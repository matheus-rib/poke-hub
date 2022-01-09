import React from 'react'
import { RouteObject } from 'react-router-dom'
import Pokemons from '../pages/Pokemons'
import Pokemon from '../pages/Pokemons/Pokemon'

export default [
  {
    path: '/pokemons',
    children: [
      { index: true, element: <Pokemons /> },
      { path: ':idOrName', element: <Pokemon /> },
    ],
  },
] as Array<RouteObject>
