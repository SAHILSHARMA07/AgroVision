import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import { useLocation } from 'react-router-dom';
import idea from "../../animationJSON/idea.json"
import think from "../../animationJSON/thinking.json"
import { FertiEng }  from "./fertiData"
import { FertiHin }  from "./fertiDataHin"
export default function Fertiliser() {
  const [data, setdata] = useState(FertiEng)
  useEffect(() => {

    if(window.localStorage.getItem("lan")=="hindi" ){
        setdata(FertiHin);
  
        }
        else
        {
          setdata(FertiEng);
  
        }
  
  
  }, [])
  const defaultOptions = {

    loop: true,
    autoplay: true, 
    animationData: think,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}
const defaultOptions1 = {

  loop: true,
  autoplay: true, 
  animationData: idea,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
  const location= useLocation();
    const {state}=location;
   const [ferti, setFertiliser] = useState("")
  const [formValues, setFormValues] = useState({
    N: '',
    P: '',
    K: '',
    TEMPERATURE: '',
    HUMIDITY: '',
    MOISTURE: '',
    SOILTYPE: '',
    CROPTYPE: '',
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   console.log(formValues)
   

    await axios.post('http://127.0.0.1:5000/fertiliser', formValues)
    .then((response) => {
      // Handle response from the backend
      setFertiliser(response.data);
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
  };

  return (
    <div className="CmainCont">
 
  <div className="nav" style={{display:"none"}}>
  <div className="temp"> {data.temp} {state?state.Temp?state.Temp:"LOADING":"LOADING"}</div>
  <div className="humid"> {data.hum}  {state?state.humidity?state.humidity:"LOADING":"LOADING"}</div>
  </div>

<div className="Csubmain">

<div className="color">
<div className="ani">
{ferti.ans?<Lottie options = {defaultOptions1}
              height={400}
           
              width={400}
          />:<Lottie options = {defaultOptions}
              height={400}
           
              width={400}
          />}
          </div>
          {ferti.ans?<div className="cHead">{data.res1}{ferti.ans} {data.res2}</div>:<div className="cHead">{data.ques}</div> }
         
</div>
    <div className="cCont">
    <div className="cHead">{data.Head}</div>
    <form className="form5">
     
        <input
          type="number"
          name="N"
          className='in'
          style={{height:"5vh"}}
          placeholder={data.NPlace}
          value={formValues.N}
          onChange={handleChange}
          required
        />
    
      
     
        <input
          type="number"
          name="P"
          className='in'
          style={{height:"5vh"}}
          placeholder={data.PPlace}
          value={formValues.P}
          onChange={handleChange}

          required
        />
    
   
     
        <input
          type="number"
          name="K"
          placeholder={data.Kplace}
          style={{height:"5vh"}}
          value={formValues.K}
          onChange={handleChange}
          required
          className='in'

        />
      
     
      {data.ins}
        <input
          type="number"
          id='TEMPERATURE'
          name="TEMPERATURE"
          style={{height:"5vh"}}
          className='in'
          value={formValues.TEMPERATURE}
          placeholder={data.temp}
          onChange={handleChange}
          required
        />
    
   
        <input
          type="number"
          name="HUMIDITY"
          style={{height:"5vh"}}
          value={formValues.HUMIDITY}
          onChange={handleChange}
          placeholder={data.hum}
          required
          className='in'
        />
   
 
        <input
          type="number"
          name="MOISTURE"
          className='in'
          style={{height:"5vh"}}
          placeholder={data.MoistPlace}
          value={formValues.MOISTURE}
          onChange={handleChange}
          required
        />
    
    
        <input
          type="text"
          name="SOILTYPE"
          style={{height:"5vh"}}
          placeholder={data.soilTPlace}
          className='in'

          value={formValues.SOILTYPE}
          onChange={handleChange}
          required
        />
     
  
        <input
          type="text"
          name="CROPTYPE"
          style={{height:"5vh"}}
          className='in'
          placeholder={data.CropTPlace}
          value={formValues.CROPTYPE}
          onChange={handleChange}

          required
        />
     
    
      <div className="button-861"  onClick={handleSubmit}>
 {data.btn}
 </div>
     
    
    </form>
    </div>
    </div>
    </div>
  );
}
