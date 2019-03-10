if(process.env.NODE_ENV === 'production') {
    console.log('In production mode', process.env.NODE_ENV);
    module.exports = require('./keys_prod.js');
} else {
    module.exports = require('./keys_dev.js');
}

