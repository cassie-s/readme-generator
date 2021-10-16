// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmToc',
            message: 'Would you like to include a Table of Contents?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'toc',
            message: 'Which sections would you like to include in the Table of Contents?',
            choices: ['Installation', 'Usage', 'Credits', 'License']
            // when: ({ confirmToc }) => confirmToc
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a step-by-step description of how to get the development environment running. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please give details on usage!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Do you have any credits to list?',
            default: true
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Enter credits:',
            when: ({ confirmCredit }) => confirmCredit
        }
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license: (Required)',
            choices: ['MIT', 'GPLv2']
        },
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Would you like to include any badges?',
            default: true
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Enter badges:',
            when: ({ confirmBadges }) => confirmBadges
        },
        {
            type: 'confirm',
            name: 'confirmContributer',
            message: 'Would you like to include the industry standard for contributions: The Contribuer Covenant Code of Conduct?',
            default: true
        },
        {

        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser();
