// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

let questionData = {};
// Array of questions for user input
const questions = [
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
            type: 'input',
            name: 'installation',
            message: 'Provide a step-by-step description of how to get the development environment running. (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
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
            type: "list",
            name: "license",
            message: "Please select your license:",
            choices: 
            ['MIT', 
            'Apache 2.0', 
            'GNU GPL v3', 
            'Mozilla Public License 2.0', 
            'No License']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines for this project',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                }
                else {
                    console.log("Please enter contribution guidelines for this project!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide a way to test this application. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('You must provide a way to test this application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide a link to your GitHub repo: (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You must provide a link to your GitHub repo!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Provide your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide an email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Provide your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Do you have any credits to include?',
            default: true
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List credits:',
            when: ({ confirmCredits }) => confirmCredits
        },
    ];

// Function that prompts user for input using "inquirer"
const getProjectData = questions => {
    console.log(`
    ====================
    Generate a README.md
    ====================
    `);

    inquirer.prompt(questions)
        .then(answers => {
            questionData = generateMarkdown(answers);
            writeToFile("./dist/README.MD", questionData);
        });
};

// Function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log("ERROR: " + err);
        }

        console.log("Done");
    });
};

// Function to initialize app
const init = () => {
    getProjectData(questions);
}
// Function call to initialize app
init();


