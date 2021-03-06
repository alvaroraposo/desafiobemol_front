import React from 'react'
import css from './style/labelinput.module.css'

export default function LabelInput(props) {
    const label = props.myLabel;
    const value = props.myValue;
    const type = (props.myType) ? props.myType : "text";
    const name = props.myName ? props.myName : "";
    const maxlength = props.maxLength;

    return (
        <>
            <div className="col-12">
                <label>{label}</label>
            </div>
            <div className={`${css} col-12`}>
                <input type={type} name={name} defaultValue={value} onBlur={props.onBlur} onChange={ (event) => {props.onInputChange(event.target.value)}} maxLength={maxlength}/>
            </div>
        </>
    )
}
