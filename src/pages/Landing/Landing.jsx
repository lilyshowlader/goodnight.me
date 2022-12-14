import styles from "./Landing.module.css"
// import NavBar from "../../components/NavBar/NavBar"
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className={styles.container}>
    <p className={styles.logoFont}>goodnight.me</p>
    <img className={styles.img}src="https://i.imgur.com/s0WcVLi.png" alt="moon"/>
    <p>click <Link to='/Options' className={styles.linkFont}>here </Link><br></br> to continue</p>
    </div>
  )
}

export default Landing