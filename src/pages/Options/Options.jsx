import { Link } from "react-router-dom"
import styles from "./Options.module.css"
const Options = () => {
  return (
    <>
    <p className={styles.fontOne}>what would you <br></br> like to do?</p>
    <div className={styles.buttonContainer}>
    <p><Link to='/useapp' className={styles.fontTwo}>how to use this app</Link></p>
    </div>
    <div className={styles.buttonContainer}>
    <p><Link to='/viewlogs className={styles.fontTwo}'className={styles.fontTwo}>view my sleep logs</Link></p>
    </div>
    <p><Link to='/logfortoday'className={styles.fontTwo}>log for today</Link></p>
    </>
  )
}

export default Options