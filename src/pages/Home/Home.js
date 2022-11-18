import React from 'react'
import styles from './Home.module.css'
import NavBar from '../../components/navbar/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>       
       <NavBar className={styles.navbar}/>
    </div>
  )
}
