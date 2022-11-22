import React,{useState,useEffect} from 'react'
import { Route,useNavigate } from 'react-router';
import styles from './Home.module.css'
import NavBar from '../../components/navbar/NavBar';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

export default function Home() {
    const navigate = useNavigate();
    const [lat,setLat] = useState(null)
    const [lng,setLng] = useState(null)

    const [activity, setActivity] = useState([{
      _id: "",
      activityName:"",
    }]);
    
    const [user,setUser] = useState("");

    const getLocation=() =>{
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
      })
    }

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
            navigate('/');
          }
          
      })    
    }, []);

    


    const activityCard = activity.map((activity,index) =>{
      return (
         <ActivityCard key={index} act={activity.activityName} des = {activity.activityDesc}lat={activity.lat} lng={activity.lon} user_lat={lat} user_lng = {lng} user={user}/>
      )
    })
    
    
    getLocation()
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
