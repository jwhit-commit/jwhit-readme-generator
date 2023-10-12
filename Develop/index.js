const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/genMarkdown.js');
const questions = require('./utils/questions.js');

// Inquirer function to trigger command-line prompts for user
inquirer
    .prompt(questions.questions)
    .then((response) => 
        fs.writeFile(
            'genREADME2.md',
            genMarkdown.genMarkdown(response),
            (err) => err ? console.log(err) : console.log('README generated')
            )
        );

