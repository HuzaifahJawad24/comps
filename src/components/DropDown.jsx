import React from 'react';

const DropDown = ({ label, options, handleOnChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <select className="form-control border" onChange={handleOnChange}>
            {options.map(option => (
                <option key={option}>{option}</option>
            ))}
        </select>
    </div>
)

export default DropDown;