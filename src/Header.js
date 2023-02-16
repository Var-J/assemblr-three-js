import React from 'react'

function Header() {
  return (
    <header id="home" className="flex justify-between text-2xl">
        <h1 className="text-3xl">FurnitureBox™</h1>
        <ul className="flex space-x-10 items-center">
          <li>Home</li>
          <li>Furnitures</li>
        </ul>
      </header>
  )
}

export default Header