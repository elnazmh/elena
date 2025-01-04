import styled from "../About/About.module.css";
import Headerr from "../../components/Main/Header/Headerr";
import { Link } from "react-router-dom";
import iamge from "../../Accets/download (1).jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";



function About (){
    // const [elnaz,setElnaz] =  useState({name:'elen',age:22}
    // )

    // console.log(elnaz);
    
    // const force = ()=>{
    //     setElnaz(prevstate=>({...prevstate,age:34}))
    // }




    const[isloading,setIsLoading] = useState (false)
    useEffect(()=>{
        setIsLoading(true)
    axios.get("http://localhost:3003/aboutUs")
    .then((result)=>{
        setIsLoading(false)
    })
    .catch((error)=>{
        setIsLoading(false)
    })    })




    return (
        <div>
            {isloading ? (<p className={styled.loading}><Spinner /></p>)
        : (<><Headerr />
            <h2>زندگینامه گربه</h2>
            <img className={styled.img} src={iamge} alt="" />
            

          {/* <button onClick={force}>click</button>   */}
        </>)
        }


        </div>
    )
}


export default About