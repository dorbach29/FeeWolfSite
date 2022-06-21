import Link from 'next/link'
import navstyles from "../styles/Navbar.module.css"


const Navbar = () => {
    return (
      <div className={navstyles.navbar}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/exchange'>Exchange</Link>
          </li>
          <li>
            <Link href='/gas'>Gas</Link>
          </li>
        </ul>
      </div>
    )
}

export default Navbar