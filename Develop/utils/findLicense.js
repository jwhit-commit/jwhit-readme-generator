const licenses = require('./licenses.js');

const findLicense = function(licenseName) {
    for (let [key,obj] of Object.entries(licenses.licenses)) {

        if (obj.name === licenseName) {
        return [obj.badge,obj.url]
        }
    };
}

module.exports = {
    findLicense
};

// var arr = findLicense("The MIT License");
// console.log(arr)