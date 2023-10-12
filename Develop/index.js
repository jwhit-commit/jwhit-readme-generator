// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/genMarkdown.js');
const questions = require('./utils/questions.js');


inquirer
    .prompt(questions.questions)
    .then((response) => 
        fs.writeFile(
            'genREADME.md',
            genMarkdown.genMarkdown(response),
            (err) => err ? console.log(err) : console.log('success')
            )
        );




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
