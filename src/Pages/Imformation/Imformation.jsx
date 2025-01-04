import Headerr from "../../components/Main/Header/Headerr";
import styled from "../Imformation/Imformation.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import iamge from "../../Accets/download.jpg";
import Text from "../../components/Main/Text/Text";
import Spinner from "../../components/Spinner/Spinner";





function Imformation() {
    const [repeat, setRepeat] = useState()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setRepeat([{
            "fName": "elnaz", "id": "1"
        },
        { "fName": "hasan", "id": "2" },
        { "fName": "hosein", "id": "3" },
        { "fName": "fName 4", "id": "4" },
        { "fName": "fName 5", "id": "5" },
        { "fName": "fName 6", "id": "6" }]

        )









        setIsLoading(true)
        axios.get('http://localhost:3000/')
            .then((result) => {
                setIsLoading(false)

            })
            .catch((error) => {
                setIsLoading(false)
            })

    }, [])




    return (

        <div>
            <Headerr />

            {isLoading ? (<p><Spinner /></p>)
                : (

                    <Text />
                    
                    
                )
            }



            <h2>
                {Array.isArray(repeat) && repeat.length > 0
                    ? repeat.map(item => item.fName).join(', ')
                    : 'No data available'} 
            </h2>















        </div>
    )
}


export default Imformation