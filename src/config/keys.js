if(process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod.js');
    console.log('Exports api key is?', module.exports.apiMapKey)
} else {
    module.exports = require('./keys_dev.js');
}

