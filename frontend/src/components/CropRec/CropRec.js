import { useLocation } from "react-router-dom"
import { useState ,useEffect } from "react";
import "../CropRec/CropRec.css"
import Lottie from "react-lottie";
import axios from "axios"
import idea from "../../animationJSON/idea.json"
import think from "../../animationJSON/thinking.json"
import { CropRecEng } from "./CropRecEng";
import { CropRecHin } from "./CropRecHin";


export default function Crop(){
  const [crop, setcrop] = useState("")
  const [data, setdata] = useState(CropRecEng)
  const defaultOptions = {

    loop: true,
    autoplay: true, 
    animationData: think,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}
useEffect(() => {

  if(window.localStorage.getItem("lan")=="hindi" ){
      setdata(CropRecHin);

      }
      else
      {
        setdata(CropRecEng);

      }


}, [])
const defaultOptions1 = {

  loop: true,
  autoplay: true, 
  animationData: idea,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
    const [formData, setFormData] = useState({
        N: '',
        P: '',
        K: '',
        TEMPERATURE: '',
        HUMIDITY: '',
        PH: '',
        RAINFALL: '',
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
        // Send form data to the Flask backend
       await axios.post('http://127.0.0.1:5000/crop', formData)
          .then((response) => {
            // Handle response from the backend
            setcrop(response.data);
          })
          .catch((error) => {
            // Handle error
            console.error(error);
          });
      };

    const location= useLocation();
    const {state}=location;
    console.log(state)
    return <div className="CmainCont">

  <div className="nav">
  <div className="temp"> {data.temp} {state.Temp}</div>
  <div className="humid">  {data.hum}  {state.humidity}</div>
  </div>

<div className="Csubmain">

<div className="color">
  

<div className="ani">
{crop?<Lottie className="ani" options = {defaultOptions1}
              height={400}
           
              width={400}
          />:<Lottie  className="ani"  options = {defaultOptions}
              height={400}
           
              width={400}
          />}
          </div>
          {crop?<div className="cHead">{data.res1} {crop} {data.res2}</div>:<div className="cHead">{data.ques}</div> }
         
</div>
  
  <div className="cCont">
  <div className="cHead">{data.Head}</div>
  <form className="form5">
 
        <input
        className="in"
          type="number"
          name="N"
          value={formData.N}
          placeholder={data.NPlace}
          onChange={handleChange}
        />
      
  
     
        <input
         className="in"
          type="number"
          name="P"
          placeholder={data.PPlace}
          value={formData.P}
          onChange={handleChange}
        />
   
      
     
        <input
         className="in"
          type="number"
          name="K"
          placeholder={data.Kplace}
          value={formData.K}
          onChange={handleChange}
        />
   
      
     
        <input
         className="in"
          type="number"
          name="TEMPERATURE"
          value={formData.TEMPERATURE}
          onChange={handleChange}
          placeholder={data.temp}
        />
      
      
     
        
        <input
         className="in"
          type="number"
          name="HUMIDITY"
          placeholder={data.hum}
          value={formData.HUMIDITY}
          onChange={handleChange}
        />
    
 
   
        <input
         className="in"
          type="number"
          name="PH"
          placeholder={data.ph}
          value={formData.PH}
          onChange={handleChange}
        />
    
      
      
        <input
         className="in"
          type="number"
          name="RAINFALL"
          placeholder={data.rain}
          value={formData.RAINFALL}
          onChange={handleChange}
        />
   
   <div className="button-861"  onClick={handleSubmit}>
  {data.btn}
 </div>

 
  </form>
 
  </div>
  </div>
    </div>
}