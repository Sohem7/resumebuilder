import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
    <div>
        <ul className={styles.ul}>
        <li className={styles.li}><Link className={styles.a} to="/">Home</Link></li>
        <li className={styles.li}><Link className={styles.a} to="builder">Builder</Link></li>
        <li className={styles.li}><Link className={styles.a} to="preview">Preview</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar