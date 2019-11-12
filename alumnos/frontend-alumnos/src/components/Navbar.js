import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header>
        <h1>Mis compañeros de clase en IronHack</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/list'>Lista de alumnos</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
