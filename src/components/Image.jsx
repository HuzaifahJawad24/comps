import React from 'react';

const Image = ({ label, acceptedFormats, handleOnChange }) => (                  
    <div className="form-group">
        <label>{label}</label>
        <input
            type="file"
            accept={acceptedFormats}
            className="form-control-file"
            onChange={handleOnChange}    
        />
    </div>
)

export default Image;