import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItem({ children, navItemStyles, NavLink }) {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className={`flex py-2 text-base font-medium hover:text-yellow-500 cursor-pointer transition-colors lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  )
}
