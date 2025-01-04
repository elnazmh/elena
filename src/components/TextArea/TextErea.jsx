import styled from "./TextErea.module.css";

function TextErea (props){
    return(<div className={styled.div}>

<label>{props.label}</label>
<textarea>{props.onchange}</textarea>


    </div>)
}

export default TextErea