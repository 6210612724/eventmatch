import React from 'react'
import styles from './CreateActivity.module.css'
import NavBar from '../../components/navbar/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>       
        CreateActivity
       <NavBar className={styles.navbar}/>
    </div>
  )
}
