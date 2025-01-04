import styled from "../Resurce/Resurce.module.css";
import Header from "../../components/Main/Header/Headerr";
import Center from "../../components/Resurce/Center/Center";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";




function Resurce() {
    const [isLoading, setIsLoading] = useState(false)

    const [list, setList] = useState([])

    useEffect(() => {

        setList([{ "fName": "elnaz", "id": "1" }, { "fName": "hasan", "id": "2" },
        { "fName": "hosein", "id": "3" }, { "fName": "elnaz 4", "id": "4" },
        { "fName": "mamad 5", "id": "5" }, { "fName": "omid 6", "id": "6" },
        { "fName": "elmiara 7", "id": "7" }, { "fName": "majid 8", "id": "8" },
        { "fName": "leila 9", "id": "9" }, { "fName": "elena 10", "id": "10" },
        { "fName": "saeed 11", "id": "11" }, { "fName": "janan 12", "id": "12" }])



        setIsLoading(true)

        axios.get('http://localhost:3000/')

            .then((result) => {

                setIsLoading(false);

            })
            .catch((error) => {
                setIsLoading(false)
            })


    }, []

    )
    const[count,setCount] = useState(0)

    const hand = () =>{
        setCount(count+1)
    } 
    const [changing, setChanging] = useState({ title: "", lastTitle: "", ort: "" })
    const change = (e) => {
        setChanging((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))


    }





    return (<div className={styled.divv}>
        {isLoading ? <p><Spinner /></p> : <>
            <Header />
            {list.map((result) => (<Center />

            )


            )}
            <h2>{list.fName}</h2>
<button onClick={hand}>{count}</button>



<input name="title" onChange={change} className={styled.input}  type="text" />
                <br />
                <br />
                <br />
                <label className={styled.labell} htmlFor="">نامخانوادکی</label>
                <input name="lastTitle" onChange={change} className={styled.inputt} type="text" />
                <br /><br /><br />
                <label className={styled.labell} htmlFor="">شهر</label>
                <input name="ort" onChange={change} className={styled.inputt} type="text" />
                <br /><br /><br />


        </>
        }






    </div>




    )
}

export default Resurce