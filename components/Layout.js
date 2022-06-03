import styles from "../styles/Layout.module.css";
import Nav from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
      <>
      <Nav/>
      <div className={styles.container}>
            {children}
      </div>
      <Footer/>
      </>
    )
} 

export default Layout;