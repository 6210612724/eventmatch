import React, { Component, useState, useEffect } from 'react';
import Select from 'react-select'
import AsyncSelect from 'react-select/async';
import { longdo, map, LongdoMap } from './LongdoMapAPI';
import styles from './Longdo_Show.module.css'
import Form_location from "../components/form/form_location"
import 'bootstrap/dist/css/bootstrap.min.css';
//data
import Location from "../data/location.json"
//

// import 'bootstrap/dist/css/bootstrap.min.css';
//replace a LongdoMap.js file


function Get_location() {
  
  // let data = []
  // for (let i = 0; i < Location.length; i++) {
  //   data.push({
  //     label: Location[i].location_name,
  //     value: {
  //       lon: Location[i].lon,
  //       lat: Location[i].lat,
  //     },
  //     name:"gohza"

  //   })
  // }

  // หาอีกแบบ เขียนไวกว่า
  const updatedata = Location.map(({ lon, lat, location_name }) => ({
    label: location_name,
    value: ({
      lon: lon,
      lat: lat
    })
  }))
  console.log(updatedata)
  return (updatedata)
}

function Find_geolocation(event) {
  map.location({ lon: event.value.lon, lat: event.value.lat })
  let marker = new longdo.Marker({ lon: event.value.lon, lat: event.value.lat })
  map.Overlays.clear();
  map.Overlays.add(marker)
  alert(
    `ทำการปักหมุดที่ตำแหน่ง
สถานที่ : ${event.label}
lon : ${event.value.lon}
lat : ${event.value.lat}
`)


}


const temp_options = [{ value: "1", label: "สถานที่1" },
{ value: "2", label: "สถานที่2" },
{ value: "3", label: "สถานที่3" },]



function Get_data() {
  fetch("http://localhost:4000/find/location")
    .then(res => res.json())
    .then(res => {

      const data = []

      for (let i = 0; i < res.length; i++) {
        data.push({
          value: res[i].productId,
          label: res[i].productName
        })
      }
      console.log(data)
      return data

    })
}


//ถ้าไม่ใส่เหมือนจะ error โหลดหน้าขาว
function Get_loc_lat() {
  let data = map.location()
  alert(
    `losn : ${data.lon} 
lat : ${data.lat}`)
}

// const data_goh = Get_data()





// fetch("http://localhost:4000/find")
//   .then(res => res.json())
//   .then(res => {
//     const select_options = res
//   })



class Map_Show extends Component {


  initMap() {
    map.Layers.setBase(longdo.Layers.GRAY);
    map.Ui.Fullscreen.visible(true)
    map.Ui.Fullscreen.toggle(false)
    map.Ui.Geolocation.visible(true)


  }




  render() {
    const mapKey = '0cb349dadf75515ec2cdeee6677a9693'

    return (
      <>
        <p>{this.props.user}</p>
        <div className={styles.dropdown_section}>
        <div className={styles.dropdown} >
              <button onClick={() => map.location({ lon: 100.60753718018532, lat: 14.069046759560713 })}>ธรรมศาสตร์</button>
              
              <Select options={Get_location()} onChange={(event) => Find_geolocation(event)} ></Select>
              <br></br>
              {/* <AsyncSelect
                cacheOptions
                // defaultOptions
                getOptionLabel={e => e.value}
                getOptionValue={e => e.id}
                // defaultOptions={Get_data()}
                loadOptions={Get_data()}
                onInputChange={this.handleInputChange} /> */}
          </div>

        </div>
        <div className={styles.btn_section}>
          <div className={styles.confirm}><Form_location/></div>
        </div>
        <div className={styles.map_section}>
          <div className={styles.map}>

            <LongdoMap id="longdo-map" mapKey={mapKey} callback={this.initMap} />

          </div>
        </div>
        



      </>
    );
  }
}



export default Map_Show;