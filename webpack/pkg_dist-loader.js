var loaderUtils = require('loader-utils');

module.exports = function(source) {
    var options = loaderUtils.getOptions(this);
    var json = JSON.parse(source);
    
    Object.keys(options).forEach(function(key, index) {
        json[key] = options[key];
    });

    return json;
}