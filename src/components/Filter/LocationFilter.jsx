import React from 'react'
import { HouseContext } from '../../context/HouseContext';

const LocationFilter = () => {
 
 const {country, setCountry, countries} = useContext(HouseContext);

 const locationHandler = (event) => {
    setCountry(event.target.value);
 }

  return (
    <Form>
        <label style={{marginTop:"1px", marginBottom:"1px", fontWeight:"bold"}}>Location</label>
        <select placeholder='select country'>
          {countries.map((country, index) => {
            return <option key={index} onClick={locationHandler}>{country}</option>
          })}
        </select>
    </Form>
  )
}

export default LocationFilter