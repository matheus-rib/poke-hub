import React from 'react'
import { RouteObject } from 'react-router-dom'
import ResponsiveMenu from '../layouts/ResponsiveMenu'
import About from '../pages/About'
import Explore from '../pages/Explore'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

export default [
  {
    path: '/',
    element: <ResponsiveMenu />,
    children: [
      { index: true, element: <Home /> },
      { path: '/explore', element: <Explore /> },
      { path: '/about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
] as Array<RouteObject>
