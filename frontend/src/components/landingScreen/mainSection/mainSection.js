import { useNavigate } from "react-router-dom";
import React, { useState ,useEffect} from 'react';
import tree from "../../../assets/tree.json"
import bird from "../../../assets/bird1.png"
import Lottie from "react-lottie";
import "./mainSection.css"
import {mainSecDataHin} from "./mnSecDataHin"
import {mainSecDataEng} from "./mnSecDataEng"
export default function MainSection(props){
   const [data, setdata] = useState(mainSecDataEng)
const nm= window.localStorage.getItem("name");
   const defaultOptions = {

      loop: true,
      autoplay: true, 
      animationData: tree,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
  }

  useEffect(() => {

   if(window.localStorage.getItem("lan")=="hindi" ){
       setdata(mainSecDataHin);

       }
       else
       {
         setdata(mainSecDataEng);

       }


}, [])

  console.log(nm);
return <div className="MainContainer">
   
   <div className="button-86">
      {data.weather}
 </div>


  {props.today?<div className="weatherDis">
     <div className="weatherHead">{data.place} {props.today.name}</div>
     <div className="weatherSub">{data.today}</div>
     <div className="weathermini">{data.temp}  {Math.round((props.today.main.temp-273.15)*100)/100}</div> 
 
     <div className="weathermini">{data.pressure}  {props.today.main.pressure}</div> 
     <div className="weathermini">{data.description}  {props.today.weather[0].description}</div>
     <div className="weathermini">{data.vis}  {props.today.visibility}</div> 
     <div className="weathermini">{data.wind} {props.today.wind.speed}</div> 
     <div className="weathermini">{data.hum}  {props.today.main.humidity}</div> 
  </div>:"LOADING...Weather Data"} 
   <div className="mnhead">{data.mnhead} <span className="name">{nm.toUpperCase()}</span></div>
   <div className="subcont">

   <div className="contentBox1">{data.contentBox11}<span className='high'>{data.highText}</span>{data.contentBox12}</div>
<div className="birddiv">

<div className="birdimg">
<Lottie options = {defaultOptions}
              height={300}
           
              width={300}
          />
</div>

</div>
<div className="contentBox">{data.contentBox1}<span className='high'>{data.highText1}</span>{data.contentBox2}</div>
</div>

{/* <div onClick={handleClick}>Logout</div> */}

<div className="colordiv">

</div>

</div>
}





