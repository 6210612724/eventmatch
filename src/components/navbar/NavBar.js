import React from 'react'
import styles from './NavBar.module.css'
import {Link} from "react-router-dom";


export default function Home() {
  return (
    <div className={styles.container}>       
       <Link style={{ textDecoration: 'none' }} to="/home">
        <h3>Home</h3>
       </Link>
       <Link style={{ textDecoration: 'none' }} to="/createactivity">
        <h3>Create Activity</h3>
       </Link>
       <Link style={{ textDecoration: 'none' }} to="/">
       <h3>Log out</h3>
       </Link>
    </div>
  )
}
