import { useContext, useState } from "react";
import styled from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import App from "../../../App";



function Headerr() {
    const[counter,setCounter] = useState (0)
    const[reducecounter,setReduceCounter] = useState (0)
    
    // const {result} = useContext(saeed)



    const handel = ()=>{
        setCounter(counter+1)

    }

    const handell = ()=>{
        setReduceCounter(reducecounter-1)

    }







    return (
        <div className={styled.div}>

            <ol className={styled.ol}><li> <Link to="/">صفحه اصلی</Link></li>
                <li><Link to="/Link"> متن</Link></li>
                <li><Link to="/aboutUs">درباره ما</Link></li>
                <li><Link to="/Imformation"> اطاعات عمومی</Link></li>
                <li><Link to="/Form">  فرم ها</Link></li>
                <li><Link to="/Resurce"> منابع</Link></li>




            </ol>

            <button onClick={handel}>{counter}</button>
            <span>0</span>
            <button onClick={handell}>{reducecounter}</button>







        </div>
        
    )



}

export default Headerr