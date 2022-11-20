import React from 'react'
import styles from './ActivityCard.module.css'



export default function ActivityCard(pros) {
    const{act,des,createby,user,lat,lng,user_lat,user_lng} = pros    
    
    
            const toRadian = n => (n * Math.PI) / 180

            let lat2 = lat
            let lon2 = lng
            let lat1 = user_lat
            let lon1 = user_lng

            console.log(lat1, lon1+"==="+lat2, lon2)
            let R = 6371  // km
            let x1 = lat2 - lat1
            let dLat = toRadian(x1)
            let x2 = lon2 - lon1
            let dLon = toRadian(x2)
            let a =
              Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            let d = R * c
            const dis = d.toFixed(2)
            
          
    

    return (
      <div className={styles.container}>  
        <li className={styles.act_title}>{act}</li>
        <li className={styles.dis}>สร้างโดย</li>
        <li className={styles.dis}>ระยะห่างจากท่าน {dis} กม.</li>
        <li className={styles.disct}>รายละเอียด</li>
        <li className={styles.disc}>{des}</li>
        
       
        <div className={styles.confirm_container}>
          <button className={styles.confirm_btn}>เข้าร่วมกิจกรรม</button>
        </div>
      </div>
    )
}
