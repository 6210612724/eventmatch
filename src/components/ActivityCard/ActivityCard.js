import React from 'react'
import styles from './ActivityCard.module.css'



export default function ActivityCard(pros) {
    const{act,createby,user} = pros
    return (
      <div className={styles.container}>  
        <p className={styles.act_title}>{act}</p>
        <div className={styles.confirm_container}>
          <button className={styles.confirm_btn}>เข้าร่วมกิจกรรม</button>
        </div>
      </div>
    )
}
