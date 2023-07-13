
import React, { useState,useEffect } from 'react';
import axios from 'axios';

import Lottie from 'react-lottie';
import scan from "../../animationJSON/leafscan.json"
import "./Disease.css"
import {disData} from '../../utils/diseaseData';
import { disDataHin } from '../../utils/disDataHindi';
function Disease() {
  const [clicked, setClicked] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [disease, setdisease] = useState("none")
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

var lang=window.localStorage.getItem("lan")
var disDt= (lang=="hindi"?disDataHin:disData)

useEffect(() => {




 
}, [])
 
  const handleSubmit = async(event) => {
 
    setClicked(1);

    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Send the formData to the Flask API using fetch or Axios
      await axios.post('http://127.0.0.1:5000/predict', formData)
          .then((response) => {
            // Handle response from the backend
            setdisease(response.data);
          })
          .catch((error) => {
            // Handle error
            console.error(error);
          });
    }
  };
  const defaultOptions2 = {

    loop: true,
    autoplay: true, 
    animationData:scan,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
   
    <div className='page'>
      
   {console.log(window.localStorage.getItem("lan"))}
      <div className='anime'  style={{display:clicked?"none":"flex"}}>
      <Lottie  options = {defaultOptions2}
              height={400}
           
              width={400}
          />
      </div>
    <form className="fm1" onSubmit={handleSubmit}>

      <input type="file" id='fileUpload'  style={{display:clicked?"none":"block"}} className="filebtn"  onChange={handleFileChange} />
   
      <button type="submit" className='upload' style={{display:clicked?"none":"block"}} >{disDt.upload}</button>
      <div className='output' style={{display:clicked?"block":"none"}}>
      {/* <div className='h1'> {disease.dis} </div> */}
      {console.log(disDt)}
      {console.log()}
      <div className='h1'> {disDt[disease.dis] && disDt.crop+": "+disDt[disease.dis]["Crop"]}<br/>
      {disDt[disease.dis] && disDt.disease+": "+disDt[disease.dis]["Disease"]}<br/>
      </div>
      <div className='causes'>
      <div className='h1'>{lang=="hindi"?"बीमारी का कारण":"CAUSES"}:</div>
      {disDt[disease.dis] && (disDt[disease.dis]["Cause of disease"] ? disDt[disease.dis]["Cause of disease"].map((ele)=>{return <div className='elements'>{ele}</div>}):"ALL GOOD") }
      </div>
      <div className='cures'>
      <div className='h1'> {lang=="hindi"?"बीमारी को कैसे रोकें/इलाज करें":"CURES AND PREVENTIONS"}: </div>
      {disDt[disease.dis]  && disDt[disease.dis]["How to prevent/cure the disease"].map((ele)=>{return <div className='elements'>{ele}</div>})}
      </div>
      </div>
    </form>
    </div>
  );
}

export default Disease;
