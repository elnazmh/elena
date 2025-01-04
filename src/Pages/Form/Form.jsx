import { useEffect, useState } from "react";
import Headerr from "../../components/Main/Header/Headerr";
import styled from "../Form/Form.module.css";
import axios from "axios";
import Text from "../../components/Main/Text/Text";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Form/Input";
import TextErea from "../../components/TextArea/TextErea";


function Form() {

    const [changing, setChanging] = useState({ title: "", lastTitle: "", ort: "", adresse: "", message: "" })
    const [isloading, setIsLoading] = useState(false)


    const change = (e) => {
        setChanging((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))


    }
    console.log(changing);

    const handelclicked = (e) => {
        setChanging((prevState) => ({
            ...prevState,
            message: e.target.value
        }))


    }


    const buttonClick = () => {
        axios.post('https://675d51defe09df667f65f287.mockapi.io/users', changing)
            .then((result) => {
                console.log(result);

            })
            .catch((eroor) => {
                console.log(eroor);

            })
    }

useEffect(() => {
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
        {isloading ? (<p>is loading</p>) : (<><Headerr />

            <div className="w-72 h-72 bg-fuchsia-600">


                <Input title="نام" change={change} label="نام" />
                <Input title="نامخانوادکی" change={change} label="نامخانوادکی" />
                <Input title="شهر" change={change} label="شهر" />
                <Input title="ادرس" change={change} label="ادرس" />
                <TextErea label="متن" onchange={handelclicked} />

                <button onClick={buttonClick}>مقاله</button>

            </div></>
        )}


    </div>
)
}

export default Form