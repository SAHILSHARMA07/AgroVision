import "./Section1.css"
import { useState,useEffect } from "react"
import crop from "../../../assets/crop.jpeg"
import Fertiliser from "../../../assets/fertiliser.jpg"
import Dis from "../../../assets/dis.jpeg"
import { useNavigate } from "react-router-dom"
import {secDataEng} from "./SectionDataEng"
import {secDataHin} from "./SectionDataHin"
export default function Section1(props){
  const [Temp, setTemp] = useState("");
  const [humidity, sethumidity] = useState("");
  const [data, setdata] = useState(secDataEng)

// setTemp(props.today.main.humidity)
  const navigate=useNavigate();

  function navTocrop(){
   navigate("/crop" ,{state:{
    Temp:props.today?(Math.round(props.today.main.temp-273.15)*100)/100:0,
    humidity:props.today?props.today.main.humidity:0
  }
  }
   );
  }

  function navTofer(){
    navigate("/fertiliser",{state:{
      Temp:props.today?(Math.round(props.today.main.temp-273.15)*100)/100:0,
      humidity:props.today?props.today.main.humidity:0
    }
   }
   );
   }
   function navToplant(){
    navigate("/disease",{state:{
      Temp:props.today?(Math.round(props.today.main.temp-273.15)*100)/100:0,
      humidity:props.today?props.today.main.humidity:0
    }
   }
   );
   }
   useEffect(() => {

    if(window.localStorage.getItem("lan")=="hindi" ){
        setdata(secDataHin);
 
        }
        else
        {
          setdata(secDataEng);
 
        }
 
 
 }, [])
 
   


    return <div className="cont1">
  <div className="cont2">

  <div className="card" onClick={navTocrop}>
   <img src={crop} className="cardimg"/>
   <div className="featname">{data.cropAdv}</div>
  </div>
  <div className="card" onClick={navTofer}>
  <img src={Fertiliser} className="cardimg"/>
   <div className="featname">{data.ferti}</div>
  </div>
  <div className="card" onClick={navToplant}>
  <img src={Dis} className="cardimg"/>
   <div className="featname">{data.dis}</div>
  </div>
  </div>
  
   
  
    </div>
}