if(process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod.js');
} else {
    console.log('Whats happeening', process.env.NODE_ENV);
    module.exports = require('./keys_dev.js');
}

