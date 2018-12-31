import React from 'react';
import PropTypes from 'prop-types';

export const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    error,
    info,
    onChange,

}) => {
    return (
        <div className="form-group">
            <textarea
                className="form-control-large"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                rows="3"
            />
            {info && <small className="form-text text-muted">{info}</small>}
            {error && (<div className="invalid-feedback">{error}</div>)}
        </div>
    )
};

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


export default TextAreaFieldGroup;
