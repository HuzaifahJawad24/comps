import React from 'react';
import '../css/toggleswitch.css'


const ToggleSwitch = (props) => (
    <div className={`${props.switchclass} toggle-switch`}>
        <input type="checkbox" className={props.inputclass} id={props.id}/>
        <label className={props.labelclass} for={props.id}>{props.label}</label>
    </div> 
)

export default ToggleSwitch;
