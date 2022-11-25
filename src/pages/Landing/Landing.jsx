import styles from "./Landing.module.css"

const Landing = () => {
  return (
    <div className={styles.container}>
    <p className={styles.logoFont}>goodnight.me</p>
    <img className={styles.img}src="https://i.imgur.com/s0WcVLi.png" alt="moon"/>
    </div>
  )
}

export default Landing