// import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
// import Researchbox from 'components/Navigation/Researchbox'

export default function Navigation() {
  // const [visability, setVisability] = useState(false)

  // function handlechange() {
  //     setVisability(true)
  // }

  // function handlenot() {
  //     setVisability(false)

  return (
    <nav>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Catalog
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Cart
      </NavLink>
        {/* {visability && <Researchbox/>} */}
    </nav>
  );
}
