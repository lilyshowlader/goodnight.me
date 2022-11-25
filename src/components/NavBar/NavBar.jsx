import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">log in</NavLink></li>
      <li><NavLink to="/signup">sign up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/blogs">BLOGS</NavLink></li>
      <li><NavLink to="/blogs/new">NEW BLOG</NavLink></li>
      <li><NavLink to="/logout" onClick={handleLogout}>LOG OUT</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to={'/'}></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar