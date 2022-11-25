import { Link } from "react-router-dom"

const Options = () => {
  return (
    <>
    <p>what would you like to do?</p>
    <p><Link to='/useapp'>how to use this app</Link></p>
    <p><Link to='/viewlogs'>view my sleep logs</Link></p>
    <p><Link to='/logfortoday'>log for today</Link></p>
    </>
  )
}

export default Options