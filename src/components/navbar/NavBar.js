import React from 'react'
import styles from './NavBar.module.css'
import {Link} from "react-router-dom";


export default function Home() {

  function logoutHandler(){
    localStorage.removeItem('token')
  }
  return (
    <div className={styles.container}>  
      <div className={styles.btn_container}>   
        <Link style={{ textDecoration: 'none' }} to="/home">
            <div className={styles.btn}>
              <img src='/HomeLogo.svg' alt='Home'/>
           
            </div>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="/createactivity">
            <img src='/AddLogo.svg' alt='Home'/>
          
        </Link>

        <Link style={{ textDecoration: 'none' }} to="/myactivity">
            <img src='/ActivityLogo.svg' alt='Home'/>
        </Link>
        <button onClick={logoutHandler}>logout</button>
       </div>  
    </div>
  )
}
