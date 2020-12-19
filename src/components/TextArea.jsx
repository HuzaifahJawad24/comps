import React from 'react';

const TextArea = ({ label, value, handleOnChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <textarea value={value} onChange={handleOnChange} className="form-control border" rows="3" />
    </div>
)

export default TextArea;