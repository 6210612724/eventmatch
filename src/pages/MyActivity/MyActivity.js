import React, { useState, useEffect } from 'react'
import styles from './MyActivity.module.css'
import NavBar from '../../components/navbar/NavBar';
import MyActivityCard from '../../components/MyActivityCard/MyActivityCard';



export default function Home() {
  const [user, setUser] = useState("test");

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch("http://localhost:4000/auth", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },

    })
      .then(response => response.json())
      .then(data => {
        if (data.status == 'ok') {
          setUser(data.decoded.username)

          
          
        } else {
          console.log("กรุณาทำการ login ก่อน")

        }

        fetch(`http://localhost:4000/myActivity?user=${data.decoded.username}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            //response data จาก backend
          })

      })
  }, []);


  // useEffect(() => {



  //   fetch(`http://localhost:4000/myActivity?user=${user}`)
  //     .then(response => response.json())
  //     .then(data => {
  //     })
  // });




  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        <div className={styles.cardbox}>
          <MyActivityCard />
        </div>
      </div>
      <NavBar className={styles.navbar} />
    </div>
  )
}
