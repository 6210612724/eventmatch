import React from 'react'
import styles from './Home.module.css'
import NavBar from '../../components/navbar/NavBar';
import ActivityCard from '../../components/ActivityCard/ActivityCard';

export default function Home() {

  // test data

    var act1 = 'เดินเยาวราช'
    var act2 = 'ไปทะเล'
    var act3 = 'ดูคอนเสริต'
    var createby1 = 'tony stark'
    var createby2 = 'stebe roger'
    var createby3 = 'bruce banner'
    return (
      <div className={styles.container}>     
          <div className={styles.card_container}>
              <div className={styles.cardbox}>
                  <ActivityCard act={act1} createby={createby1}  />
                  <ActivityCard act={act2} createby={createby2}/>
                  <ActivityCard act={act3} createby={createby3}/>
                 
              </div>
          </div>
          <NavBar className={styles.navbar}/>
      </div>
    )
}
