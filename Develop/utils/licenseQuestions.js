const licenses = require('./licenses.js');
const licenseNames = []

//Function to extract license names from license object
for (let [key,obj] of Object.entries(licenses.licenses)) {
    licenseNames.push(obj.name)
};

module.exports = {
    licenseNames,
};