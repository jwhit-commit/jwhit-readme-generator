const licenses = require('./licenses.js');

//Function to look up license URL and Badge SVG by license name
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