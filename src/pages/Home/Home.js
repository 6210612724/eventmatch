import React,{useState,useEffect} from 'react'
import styles from './Home.module.css'
import NavBar from '../../components/navbar/NavBar';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

export default function Home() {

  // test data

    useEffect(() => {
      
  
      fetch("http://localhost:4000/find/activity", {
          method:'GET',
          headers: {
              'Content-Type':'application/json',
              
          }, 

      })
      .then(response => response.json())
      .then(data => {
        
        console.log(data)

      })
    }, []);
    return (
      <div className={styles.container}>     
          <div className={styles.card_container}>
              <div className={styles.cardbox}>
                 <ActivityCard/>
                 
              </div>
          </div>
          <NavBar className={styles.navbar}/>
      </div>
    )
}
