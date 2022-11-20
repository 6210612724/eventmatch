import React from 'react'
import styles from './ActivityCard.module.css'


function Join_activity(pros){

  let activityName = pros.act
  let user = pros.user
  alert(`
ชื่อกิจกรรมที่จะเข้าร่วม : ${activityName}
ชื่อ username account นี้ : ${user}
  `)

  fetch(`http://localhost:4000/joinActivity?activityName=${activityName}&guest=${user}`).then(

  )
}

export default function ActivityCard(pros) {
    const{act,createby,user} = pros
    return (
      <div className={styles.container}>  
        <p className={styles.act_title}>{act}</p>
        <div className={styles.confirm_container}>
          <button className={styles.confirm_btn} onClick={() => Join_activity(pros)}>เข้าร่วมกิจกรรม</button>
        </div>
      </div>
    )
}
