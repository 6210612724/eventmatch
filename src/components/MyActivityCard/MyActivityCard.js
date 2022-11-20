import React ,{useState,useEffect} from 'react'
import styles from './MyActivityCard.module.css'



export default function Home() {
  
  

  return (
    <div className={styles.container}>  
      <p className={styles.act_title}>ไปเดินเยาวราช</p>
      <p className={styles.create_by}>สร้างโดย</p>
      <div className={styles.confirm_container}>
        <button className={styles.confirm_btn}>ยกเลิกกิจกรรม</button>
      </div>
    </div>
  )
}
