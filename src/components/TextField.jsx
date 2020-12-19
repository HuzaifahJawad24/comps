import React from 'react';

const TextField = ({ label, value, handleOnChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <input value={value} onChange={handleOnChange} type="text" className="form-control border" />
    </div>
)

export default TextField;