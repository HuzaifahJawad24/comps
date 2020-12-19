import React from 'react';

const CheckBox = ({ label, isChecked, handleOnChange }) => (
    <div className="form-check">
        <input
            type="checkbox"
            className="form-check-input"
            checked={isChecked}
            onChange={handleOnChange}
        />
        <label className="form-check-label">{label}</label>
    </div>
)

export default CheckBox;