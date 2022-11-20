import React from 'react'
import styles from './MyActivity.module.css'
import NavBar from '../../components/navbar/NavBar';
import MyActivityCard from '../../components/MyActivityCard/MyActivityCard';

export default function Home() {
  
  return (
    <div className={styles.container}>     
        <div className={styles.card_container}>
            <div className={styles.cardbox}>
               <MyActivityCard/>
            </div>
        </div>
        <NavBar className={styles.navbar}/>
    </div>
  )
}
