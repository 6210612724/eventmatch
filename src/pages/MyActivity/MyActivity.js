import React, { useState, useEffect } from 'react'
import { Route,useNavigate } from 'react-router';
import styles from './MyActivity.module.css'
import NavBar from '../../components/navbar/NavBar';
import MyActivityCard from '../../components/MyActivityCard/MyActivityCard';



export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState("test");
  const [activity, setActivity] = useState([{
    _id: "",
    activityName:"",
    lon: "",
    lat: "",
    activityDesc: "",
  }]);

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
          navigate('/');

        }

        fetch(`http://localhost:4000/myActivity?user=${data.decoded.username}`)
          .then(response => response.json())
          .then(data => {
           
            setActivity(data)
            //response data จาก backend
          })

      })
  }, []);

  const activityCard = activity.map((activity,index) =>{
    return (
        <MyActivityCard key={index} act={activity.activityName} desc={activity.activityDesc} />
        
    )
  })
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
          {activityCard}
        </div>
      </div>
      <NavBar className={styles.navbar} />
    </div>
  )
}
