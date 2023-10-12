const licenses = require('./licenses.js');
const licenseNames = []

for (let [key,obj] of Object.entries(licenses.licenses)) {
    licenseNames.push(obj.name)
};

module.exports = {
    licenseNames,
};