import React from "react"
import "./mainScreen.css"
import {dataEng} from "./MainScreenDataEng"
import {dataHin} from "./MainScreenDataHin"
import grass1 from "../../assets/grass1.png"
import { useEffect,useState } from "react";
import{ useNavigate }from "react-router-dom"
import tractor from "../../animationJSON/tractorMoving.json"
import Lottie from 'react-lottie';


const MainScreen=()=>{
const [language,setLanguage]=useState("English");
const [data,setdata]=useState(dataEng);
const [btn,setbtn]=useState("English");


useEffect(() => {
  if (language === "hindi") {
    setdata(dataHin);
    window.localStorage.setItem("lan",language)
  } else {
    setdata(dataEng);
    window.localStorage.setItem("lan",language)
  }
}, [language]);



 const defaultOptions = {

        loop: true,
        autoplay: true, 
        animationData: tractor,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }


    const [isHovered, setisHovered] = useState(false)
const[motion, setmotion] = useState(0);
const navigate=useNavigate();
function navateToLogin(){
navigate("/login");
}
function navateToSignup(){
  navigate("/signup")
}

function handleT(){
  if(language=="English"){
  
    setLanguage("hindi");
    setbtn("Hindi");

  }
  else
  {
  
    setLanguage("English");
  
    setbtn("English");
   
  }

  

  console.log(window.localStorage.getItem("lan"))
}
return <div className="loginMainContainer" >


 
{/* <div className="innerdiv">
   <Lottie options = {defaultOptions}
              height={150}
          
              width={300}
          />
    </div> */}
    <div className="innerdiv">
   <Lottie options = {defaultOptions}
              height={150}
           
              width={300}
          />
    </div>
<div className="mainCont">



<div className="mainCont1" onMouseOver={()=>{
  setisHovered(true);
}} 
onMouseOut={()=>{
  setisHovered(false);
}}  
>

<div className="content">
 
<h6 className="heading">{data.heading}</h6> 
   <h6 className="subhead">{data.subhead}</h6>
<div className="btns">
    <div className="signup" onClick={navateToSignup}>
  {data.btns[0]}
    </div>
    <div className="login" onClick={navateToLogin}>
    {data.btns[1]}
        </div>
    </div>
 
</div>



</div>
<div className="btncont">
<button className="bt" onClick={handleT}>{btn}</button>
<div className="btnctn">
 Click to Change Language
</div>
</div>
</div>

















    <hr style={{width:"100vw",  borderTop: "10px dotted black" }}/>

    <div className="grass">

    {/* <img src={grass1} /> */}
    </div>






</div>


}
export default MainScreen;
