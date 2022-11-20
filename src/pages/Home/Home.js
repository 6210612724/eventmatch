import React,{useState,useEffect} from 'react'
import styles from './Home.module.css'
import NavBar from '../../components/navbar/NavBar';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

export default function Home() {

    const [activity, setActivity] = useState([{
      _id: "",
      activityName:"",
    }]);

    useEffect(() => {
      
  
      fetch("http://localhost:4000/find/activity", {
          method:'GET',
          headers: {
              'Content-Type':'application/json',
              
          }, 

      })
      .then(response => response.json())
      .then(data => {
        setActivity(data)
        
      })
    }, []);



    const activityCard = activity.map((activity,index) =>{
      return (
         <ActivityCard key={index} act={activity.activityName}/>
      )
    })
  
    return (
      <div className={styles.container}>     
          <div className={styles.card_container}>
              <div className={styles.cardbox}>
                 
                  {activityCard}

              </div>
          </div>
          <NavBar className={styles.navbar}/>
      </div>
    )
}
