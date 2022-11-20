import React , {useState,useEffect}from 'react'
import styles from './CreateActivity.module.css'
import NavBar from '../../components/navbar/NavBar';
import Map from '../../Map/Longdo_Show'

export default function Home() {
  const [user,setUser] = useState("");
  useEffect(() => {
    const token = localStorage.getItem('token')      
    fetch("http://localhost:4000/auth", {
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization' : 'Bearer '+ token
        }, 
        
    })
    .then(response => response.json())
    .then(data => {
        if (data.status == 'ok'){
          setUser(data.decoded.username)
        }else{          
          console.log("s")
        }
        
    })    
  }, []);

  return (
    <div className={styles.container}>       
       <Map user={user}/>
       <NavBar className={styles.navbar}/>
    </div>
  )
}
