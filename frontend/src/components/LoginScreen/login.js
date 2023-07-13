import { useState,useEffect } from "react";
import axios from "axios"
import {loginDataEng} from "./loginDataEng"
import {loginDataHin} from "./loginDataHin"
import "../LoginScreen/login.css"
import Landing from "../landingScreen/landing";
import { useNavigate ,useLocation} from "react-router-dom";

export default function Login(){
    const [ dat, setdata] = useState(loginDataEng)
    const lng=useLocation()

    useEffect(() => {

        if(window.localStorage.getItem("lan")=="hindi" ){
            setdata(loginDataHin);

            }
            else
            {
              setdata(loginDataEng);

            }
    
 
    }, [])

    console.log(window.localStorage.getItem("lan"));
const [data,setData]=useState({
 
    area:"",
    email:"",
    password:"",
});
function handleClick1(){
    navigate("/signup")
}
const [login, setlogin] = useState(false);
     const navigate=useNavigate();
function handleChange(e){

        e.preventDefault()
    
            const { name, value } = e.target;
            setData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
        async function handleClick(e){
          
            window.localStorage.setItem("city",data.area);
           
        e.preventDefault();
        await axios.post("http://127.0.0.1:9000/auth/userLogin",data).then((res)=>{
            
            console.log(res.data);
            if(res.data.status==true){
                window.localStorage.setItem("islogin",true);
            

                window.localStorage.setItem("name",res.data.name);
                navigate("/landing")
          
            }
            else{
                alert("please enter correct credentials")
            }
            
        })
      
       
       
     
        }
        // document.getElementById("textFieldArea").placeholder = dat.areaPlace;
        // document.getElementById("password").placeholder = dat.passwordPlace;
        // document.getElementById("email").placeholder = dat.emailPlace;
   
    return <div className="back">

  <div className="maincont">
    
        <div className="form1" >
            <h2 className="headin">{dat.headin}</h2>
    <label for="area">  <div style={{color:"greenyellow",fontSize:"1rem",backdropFilter:"blur(5px)"}}> {dat.areaLabel}</div></label>
    <input className="textField" id="textFieldArea" type="text" name = "area" placeholder={dat.areaPlace} value={data.area} onChange={handleChange}/>
    <input className="textField" id="email" type="email" name = "email" placeholder={dat.emailPlace} value={data.email} onChange={handleChange}/>
    <input className="textField" id="password"  type="password" name = "password" placeholder={dat.passwordPlace} value={data.password}  onChange={handleChange}/>
    <button  className="btn1" onClick={handleClick}>{dat.btns[0]}</button>
    <button className="btn1" onClick={handleClick1}>{dat.btns[1]}</button>
    </div>
    <div className="imgdiv" >
    <strong className="cnt">{dat.head} <br/>{dat.sb}<br/></strong>
    <strong className="cnt1">  {dat.ins} </strong>



   
   
    </div>
    </div>
  
    </div>
}