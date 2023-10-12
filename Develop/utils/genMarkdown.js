const licenses = require('./licenses.js');
const findLicense = require('./findLicense.js')


// Function to generate markdown for README
const genMarkdown = function(data) {
    var lic = findLicense.findLicense(data.license);
    // console.log(lic[0])
    return `[![License](${lic[0]})](${lic[1]})
# ${data.appName}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This is distributed under ${data.license}.

## Contributing
${data.contributing}

## Tests
${data.testing}

## Questions
Find me on [Github](https://github.com/${data.github}).
Or email me at ${data.email}.
`;
} 

module.exports = {
    genMarkdown,
};
