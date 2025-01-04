import Styled from "./Input.module.css";

function Input(props) {

















    return (<div className={Styled.div}>

<label>{props.label}</label>
<input name={props.title} onChange={props.change}  type="text" />


    </div>)
}



export default Input