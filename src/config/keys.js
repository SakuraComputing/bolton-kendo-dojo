if(process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod.js');
} else {
    console.log('What is NODE_ENV', process.env.NODE_ENV);
    module.exports = require('./keys_dev.js');
}

