
import Headerr from "../../components/Main/Header/Headerr";
import styled from "../LinkPage/Link.module.css";
import { useParams } from "react-router-dom";
import imgg from "../../Accets/download.jpg";
import { useDebugValue, useEffect, useState } from "react";
import axios from "axios";


function Link() {
    // const [isLoading, setIsLoading] = useState(false)
    const [art, setArt] = useState({})

    const params = useParams();
    // console.log(params.id);
    useEffect(() => {
        // setIsLoading(true)
        axios.get(`https://6742ecaeb7464b1c2a6310f5.mockapi.io/user/${params.id}`)
            .then((result) => {


                setArt(result.data)


                // setIsLoading(false)

            }

            )
            .catch((error) => {
                console.log(error);
                // setIsLoading(false)


            })



    }, [])






    return (<>

        {/* {isLoading ? (<p className={styled.pp}>چند لحظه صبر کنید</p>) : (<> */}
        <Headerr />


            <img src={imgg} alt="" />
            <h2>{art.fName}</h2>


            <p>A text editor for Chrome OS and Chrome.

                Text.app is a simple text editor for Chrome OS and Chrome. It's fast, lets you open multiple files at once, has syntax highlighting, and saves to Google Drive on Chrome OS.

                File bugs:
                https://github.com/GoogleChrome/text-app/issues

                Version 0.8.4:
                - Fixed performance of "Find" feature
            </p>
        {/* </> */}
        {/* ) */}
        {/* } */}

    </>

    )
}


export default Link