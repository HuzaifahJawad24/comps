import React from 'react'

const Toggle = ({ label, isChecked, handleOnChange }) => {
    return (
        <div className="custom-control custom-switch">
            <input
                type="checkbox"
                className="custom-control-input toggle-width"
                checked={isChecked}
                onChange={handleOnChange}
            />
            <label className="custom-control-label">{label}</label>
        </div>
    )
}

export default Toggle
