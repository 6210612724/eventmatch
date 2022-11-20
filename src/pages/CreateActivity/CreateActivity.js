import React from 'react'
import styles from './CreateActivity.module.css'
import NavBar from '../../components/navbar/NavBar';
import Map from '../../Map/Longdo_Show'

export default function Home() {
  return (
    <div className={styles.container}>       
       <Map/>
       <NavBar className={styles.navbar}/>
    </div>
  )
}
