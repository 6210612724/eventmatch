import React, {useState}from 'react'
import styles from './Welcome.module.css'


export default function Home() {
    const [status,setStatus] = useState("welcome");

    return (
        <div className={styles.container}> 
            {status === "welcome" &&
            <div className={styles.box}>
                <div className={styles.logo_container}>
                    <div className={styles.logo}></div>
                </div>
                <div className={styles.title_container}>
                    <h1>EventMatch</h1>
                </div>
                <div className={styles.button_container}>
                    <div className={styles.btn_box}>
                        <li><button className={styles.login_btn} onClick={()=>setStatus('login')}>Log in</button></li>
                        <li><button className={styles.signup_btn} onClick={()=>setStatus('Signup')}>Sign up</button></li>
                    </div>
                </div>
            </div>   
            }             
            {status === "login" &&
                <div className={styles.form_container}>
                    
                        <div className={styles.form_box}>
                            <button className={styles.back_btn} onClick={()=>setStatus('welcome')}>ย้อนกลับ </button>
                            <input placeholder='username'/>
                            <input placeholder='password'/>
                            
                        </div>
                </div>           
            
            }
            {status === "Signup" &&
                <div className={styles.form_container}>
                        <div className={styles.form_box}>
                            <button className={styles.back_btn} onClick={()=>setStatus('welcome')}>ย้อนกลับ </button>
                            <input placeholder='username'/>
                            <input placeholder='email'/>
                            <input placeholder='password'/>
                        </div>
                </div>           
            
            }



        </div>
    )
}