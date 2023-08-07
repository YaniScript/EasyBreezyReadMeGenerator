// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");

function dynamicMD ({ Title, Description, Installation, Usage, Tests, Contribution, License, Contact, Github, Email }) {
    return `# **${Title}**

## **Project-Description**
   ${Description}
    
---
    
## **Table of Contents**
###  [Installation](#installation)
###  [Usage Information](#usage)
###  [Testing Instructions](#tests)
###  [Contribution Guidelines](#contribution)
###  [Licensing Information](#license)
###  [Questions](#contact)
    
---
## **Installation Information** 
    ${Installation}
    
---
    
## **Usage Information**
    ${Usage}
    
---
    
## **Testing Instructions**
    ${Tests}
    
---
    
## **Contribution Guidelines**
    ${Contribution}
    
---
    
## **Licensing Information** 
    ${License}
    
---
    
## **Contact Information**
    ${Contact}
    
### Github Infomation
    ${Github}
    
### Email Address
    ${Email}
`
}

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt ([ 
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'Title',
        },
        {   type: 'input',
            message: 'Give a short description of the project.',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'How do you install this project? Provide installation instructions.',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'How should a user interact with this project/application?',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'How are tests performed on this application?',
            name: 'Tests',
        },
        {
            type: 'input',
            message: 'If users are able to contribute to this application, what should they know about ethically contributing to this project?',
            name: 'Contribution',
        },
        {
            type: 'input',
            message: 'How is the program/application licensed?',
            name: 'License',
        },
        {
            type:'input',
            message: 'What would you like to tell users about contacting you?',
            name: 'Contact'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'Github'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'Email'
        },
        ])
        .then((answers) => {
            // console.log(answers);
            const makeMD = dynamicMD(answers);
    
        fs.writeFile("README.md", makeMD) 
            .then(() => console.log("File Created!"))
            .catch((err) => console.error(err))

        })
        .catch((error) => {
            console.log(error);
        })
    ]

    

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init()
