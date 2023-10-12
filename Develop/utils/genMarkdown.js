const licenses = require('./licenses.js');
const findLicense = require('./findLicense.js')


// TODO: Create a function to generate markdown for README
const genMarkdown = function(data) {
    var lic = findLicense.findLicense(data.license);
    // console.log(lic[0])
    return `# ${data.appName}
distributed under the ${data.license}
[![License](${lic[0]})](${lic[1]})`;
} 

module.exports = {
    genMarkdown,
};

// let xyz = genMarkdown({appName:"woirjg",license:"The MIT License"})
// console.log(xyz)