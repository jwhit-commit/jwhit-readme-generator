// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const functions = require('./utils/functions.js');
const questions = require('./utils/questions.js');



inquirer
    .prompt(questions.questions)
    .then((response) =>
        fs.writeFile('genREADME.md',
        functions.genMarkdown(response),
        (err) =>
            err ? console.log(err) : console.log('success')
        ));




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
