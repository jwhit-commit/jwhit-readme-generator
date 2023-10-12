const licenses = require('./licenseQuestions.js');


//Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'What is title of your program?',
        name: 'appName',
    },
    {
        type:'list',
        message: 'Which license is your program offered under?',
        choices: licenses.licenseNames,
        name: 'license',
        default: "The MIT License",
    },
    {
        type:'input',
        message: 'Describe your program.',
        name: 'description',
    },
    {
        type:'input',
        message: 'How is your program installed?',
        name: 'installation',
    },
    {
        type:'input',
        message: 'How does one use this program?',
        name: 'usage',
    },
    {
        type:'input',
        message: 'Who can one contribute to your program and how?',
        name: 'contributing',
    },
    {
        type:'input',
        message: 'How does one test this program functionality?',
        name: 'testing',
    },
    {
        type:'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type:'input',
        message: 'What is your email address?',
        name: 'email',
    },
]

module.exports = {
    questions,
};