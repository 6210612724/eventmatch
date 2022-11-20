import React, { useState } from 'react'
import styles from './Welcome.module.css'


function Insert_register() {
    let username = document.forms["registerform_form"]["username"].value
    let password = document.forms["registerform_form"]["password"].value
    let email = document.forms["registerform_form"]["email"].value


    // fetch(`http://localhost:4000/insert/activity?activityName=${activityName}&lon=${lon}&lat=${lat}&activityDesc=${activityDesc}`)
    fetch(`http://localhost:4000/insert/register?username=${username}&password=${password}&email=${email}`)




    alert(`
username : ${username}
password : ${password}
email : ${email}
  `)

}

export default function Home() {
    const [status, setStatus] = useState("Login");

    return (
        <div className={styles.container}>
            {status === "Login" &&
                <div className={styles.box}>
                    <div className={styles.logo_container}>
                        <div className={styles.logo}></div>
                    </div>
                    <div className={styles.title_container}>
                        <h1>EventMatch</h1>
                    </div>
                    <div className={styles.button_container}>
                        <div className={styles.btn_box}>
                            <li><button className={styles.login_btn}>Log in</button></li>
                            <li><button className={styles.signup_btn} onClick={() => setStatus('Signup')}>Sign up</button></li>
                        </div>
                    </div>
                </div>
            }
            {status === "Signup" &&
                <div className={styles.form_container}>
                    <div className={styles.form_box}>
                        <form id="registerform_form" onSubmit={() => Insert_register()} >
                            <input name="username" placeholder='username' required/>
                            <input name="email" placeholder='email' required/>
                            <input name="password" placeholder='password' required />
                            <input type='submit' value="สมัครสมาชิก" />
                        </form>
                    </div>
                </div>

            }


        </div>
    )
}