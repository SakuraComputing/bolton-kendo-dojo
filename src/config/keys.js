if(process.env.NODE_ENV === 'production') {
    console.log('What is NODE_ENV prod', process.env.NODE_ENV);
    module.exports = require('./keys_prod.js');
} else {
    console.log('What is NODE_ENV dev', process.env.NODE_ENV);
    module.exports = require('./keys_dev.js');
}

