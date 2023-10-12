const licenses = require('./licenseQuestions.js');


//Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'What is title of your app?',
        name: 'appName',
    },
    {
        type:'list',
        message: 'Which license is your app offered under?',
        choices: licenses.licenseNames,
        name: 'license',
        default: "The MIT License",
    },
]

module.exports = {
    questions,
};