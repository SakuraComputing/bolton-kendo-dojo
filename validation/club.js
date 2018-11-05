const Validator = require('validator');
const isEmpty = require( './is-empty');

module.exports = function validateClubInput(data) {

    let errors = {};
    
    data.history = !isEmpty(data.history) ? data.history : '';
    data.title = !isEmpty(data.title) ? data.title : '';
    
    if (Validator.isEmpty(data.title)) {
        
        errors.title = 'Title field is required';
    }
    
    return {
    errors,
    isValid: isEmpty(errors)
    };
};