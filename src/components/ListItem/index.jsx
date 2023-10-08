import React, { useContext } from 'react'
import { ColorContext } from '../../Hooks/useTheme'
import { useCss } from 'react-use';

export default function ListItem({ children, navItemStyles, NavLink }) {
  const { colorValue } = useContext(ColorContext);

  const LinkCss = useCss({
    '&:hover': {
      color: colorValue,
    },
  })

  return (
    <>
      <li>
        <a
          href={NavLink}
      
          className={` flex py-2 text-base font-medium ${LinkCss} cursor-pointer transition-colors lg:ml-12 lg:inline-flex ${navItemStyles}`}
        >
          {children}
        </a>
      </li>
    </>
  )
}
