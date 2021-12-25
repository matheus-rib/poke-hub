import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DesktopMenu() {
  return (
    <div>
      Desktop
      <Outlet />
    </div>
  )
}
