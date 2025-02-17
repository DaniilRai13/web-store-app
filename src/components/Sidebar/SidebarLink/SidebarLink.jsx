import React from 'react'
import cls from '../Sidebar.module.css'

import { NavLink } from 'react-router-dom'

const SidebarLink = ({ id, name }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => `${cls.link} ${isActive ? cls.active : ''}`}
        to={`categories/${id}`}>{name}
      </NavLink>
    </li>

  )
}

export default SidebarLink