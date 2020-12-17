import React from 'react';

const TextArea = (props) => (
    <div className={props.holderclass}>
        <label> {props.label}</label>
        <textarea className={`${props.textareaclass} select`}  id={props.id} rows="3"></textarea>
    </div>
)

export default TextArea;
