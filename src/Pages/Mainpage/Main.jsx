import Headerr from "../../components/Main/Header/Headerr";
import Text from "../../components/Main/Text/Text";
import Footer from "../../components/Main/Footer/Footer";
import styled from "../Mainpage/Main.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Form/Input";

function Main() {
    const [art, setArt] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        axios.get("http://localhost:3003/")
            .then((result) => {
                setIsLoading(false)

            })
            .catch((error) => {
                setIsLoading(false)
            })


            setArt([{ "fName": "elnaz", "id": "1" }, { "fName": "hasan", "id": "2" },
                { "fName": "hosein", "id": "3" }, { "fName": "elnaz 4", "id": "4" }, 
                { "fName": "mamad 5", "id": "5" }, { "fName": "omid 6", "id": "6" }, 
                { "fName": "elmiara 7", "id": "7" }, { "fName": "majid 8", "id": "8" },
                 { "fName": "leila 9", "id": "9" }, { "fName": "elena 10", "id": "10" },
                  { "fName": "saeed 11", "id": "11" }, { "fName": "janan 12", "id": "12" }]
       );
    }


        , [])



    return (
        <div>


            {isLoading ? (<p className={styled.pp}>  <Spinner /></p>)
                :
                (<>            <Headerr />
                {/* <Input title="محل" label="محب"  /> */}

                    {art.map((result) => (
                        <Link to={`/link/${result.id}`}>
                            <Text /></Link>

                    ))}
                    <Footer />








                </>

                )}
        </div>
    )
}


export default Main