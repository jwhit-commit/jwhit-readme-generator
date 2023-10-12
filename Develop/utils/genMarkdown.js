const licenses = require('./licenses.js');
const findLicense = require('./findLicense.js')


// TODO: Create a function to generate markdown for README
const genMarkdown = function(data) {
    var lic = findLicense.findLicense(data.license);
    // console.log(lic[0])
    return `[![License](${lic[0]})](${lic[1]})
# ${data.appName}

## Description

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation


## Usage


## Contributing


## Tests


## License
This is distributed under ${data.license}.

## Questions
Find me on Github.
Or email me at .
`;
} 

module.exports = {
    genMarkdown,
};

// let xyz = genMarkdown({appName:"woirjg",license:"The MIT License"})
// console.log(xyz)