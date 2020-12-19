import React from 'react';
import Select from 'react-select';

const MultiSelect = ({ label, options, value, handleOnChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <Select
            isMulti
            options={options}
            value={value}
            onChange={handleOnChange}
        />
    </div>
)

export default MultiSelect;