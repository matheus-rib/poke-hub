import React from 'react'
import { RouteObject } from 'react-router-dom'
import BaseResponsiveLayout from '../layouts/BaseResponsiveLayout'
import About from '../pages/About'
import Explore from '../pages/Explore'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Pokemons from '../pages/Pokemons'

export default [
  {
    path: '/',
    element: <BaseResponsiveLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/explore', element: <Explore /> },
      { path: '/about', element: <About /> },
      { path: '/pokemons', element: <Pokemons /> },
      { path: '*', element: <NotFound /> },
    ],
  },
] as Array<RouteObject>
