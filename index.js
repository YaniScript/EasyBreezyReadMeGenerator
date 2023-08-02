// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");

function dynamicHTML (answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <style>
        h1 { 
            text-align: center;
            font-weight: 700;
            color: #06a6f4;
            font-size: 40px;
        }
        h2{
            font-weight: 700;
            color: #f49006;
            font-size: 30px;
        }
        h3 {
            text-align: center;
            font-weight: 500;
            color: #4cc1fb;
            font-size: 25px;
        }
        h4 {
            color: #4cc1fb;
            font-size: 22px;
        }
        p{
            color: white;
            font-size: 17px;
        }
        
    
    
        
    </style>
    
    <body style="background-color: #5a5a5a; font-family: 'Courier New', Courier, monospace">
        <h1>${answers.Title}</h1>
        <h3>${answers.Description}</h3>
        <br>
        <h2>Table of Contents</h2>
        <h4>Installation Instructions</h4>
        <p>${answers.Installation}</p>
        <h4>Usage Information</h4>
        <p>${answers.Usage}</p>
        <h4>Contribution Guidelines</h4>
        <p>${answers.Contribution}</p>
        <br>
        <h2>Contact Information</h2>
        <p>${answers.Contact}</p>
        <h4>GitHub Username</h4>
        <p>${answers.Github}</p>
        <h4>Email Address</h4>
        <p>${answers.Email}</p>
    
    
    
    </body>
    </html>`
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
            message: 'If users are able to contribute to this application, what should they know about ethically contributing to this project?',
            name: 'Contribution',
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
            const makeHTML = dynamicHTML(answers);
    
        fs.writeFile("ReadMe.html", makeHTML) 
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
