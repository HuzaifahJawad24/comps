import React from 'react';
import '../css/select.css'

const Select = (props) => (
    <div className={props.holderclass}>
        <label for={props.id}> {props.label}</label>
        <select className={`${props.selectclass} select`} id={props.id}>
            {props.values.map((item) => <option className="option" key={item.text}>{item.text}</option>)}
        </select>
    </div>
)

export default Select;
