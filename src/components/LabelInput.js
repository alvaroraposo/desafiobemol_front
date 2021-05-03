import React from 'react'

export default function LabelInput(props) {
    const label = props.myLabel;
    const value = props.myValue;
    const type = (props.myType) ? props.myType : "text";
    const name = props.myName ? props.myName : "";

    return (
        <div className={`row ${props.rowCol}`}>
            <div className="col-12">
                <label>{label}</label>
            </div>
            <div className="col-12">
                <input type={type} name={name} defaultValue={value} onChange={ (event) => {props.onInputChange(event.target.value)}}/>
            </div>
        </div>
    )
}
