import styles from "../styles/Layout.module.css";
import Nav from "./Navbar"

const Layout = ({children}) => {
    return (
      <>
      <Nav/>
      <div className={styles.container}>
          <main className={styles.main}>
            {children}
          </main>
      </div>
      </>
    )
} 

export default Layout;