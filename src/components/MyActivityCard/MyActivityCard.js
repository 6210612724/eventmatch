import React ,{useState,useEffect} from 'react'
import styles from './MyActivityCard.module.css'



export default function Home(props) {
  
  const {act,desc} = props

  return (
    <div className={styles.container}>  
      <p className={styles.act_title}>{act}</p>
      <li className={styles.disct}>รายละเอียด</li>
      <li className={styles.disc}>{desc}</li>
    
      
    </div>
  )
}

