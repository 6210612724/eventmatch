import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { longdo, map, LongdoMap } from "../../Map/LongdoMapAPI"
import Iframe from 'react-iframe'

function Insert_Activity(user){
  let activityName = document.forms["location_form"]["activityName"].value 
  let lon = document.forms["location_form"]["lon"].value
  let lat = document.forms["location_form"]["lat"].value
  let activityDesc = document.forms["location_form"]["activityDesc"].value

  fetch(`http://localhost:4000/insert/activity?activityName=${activityName}&lon=${lon}&lat=${lat}&activityDesc=${activityDesc}&owner=${user}`)

 


  alert(
`activity : ${activityName}
lon : ${lon}
lat : ${lat}
desc : ${activityDesc}
username : ${user}
`)

}

function Form_location(props) {
  const {user} = props

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => [setShow(true), setLon(map.location().lon), setLat(map.location().lat)];

  
  const [lon, setLon] = useState(1)
  const [lat, setLat] = useState(1)
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ยืนยันการเลิอกสถานที่
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>บันทึก Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <form id="location_form" action="http://localhost:4000/find/location" method="get"> */}
        {/* <frame name="dummyframe" id="dummyframe" style="display: none;"></frame> */}
        {/* <Iframe  className="dummyframe" id="dummyframe" style="display: none;"></Iframe> */}

          <form id="location_form" method="GET" onSubmit={() => Insert_Activity(user)}>
            <label htmlFor="activityName" >Activity name</label>
            <input type="text" id="activityName" name="activityName" required placeholder='ใส่หัวข้อ Activity'></input><br></br>
            <label htmlFor="lon" >Longitude ลองจิจูด</label>
            <input type="text" id="lon" name="lon" value={lon} required readonly></input><br></br>
            <label htmlFor="lat" >Latitude ละติจูด</label>
            <input type="text" id="lat" name="lat" value={lat} required readonly></input><br></br>
            <label htmlFor="activityDesc" >Description</label>
            <textarea type="text" id="activityDesc" name="activityDesc" required placeholder='ใส่คำอธิบาย Activity' rows="4" cols="50"></textarea><br></br>


            
          </form>

          {/* value={props.locate.lon} */}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <button onClick={() => alert(this.props)} >test</button> */}
          <button
            className="bg-slate-500 hover:bg-blue-700 text-red font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >Close</button>
          <button
            
            form="location_form"
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
          >Save</button>



        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Form_location