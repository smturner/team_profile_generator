const inquirer = require ('inquirer');
const jest = require('jest');
const fs = require('fs')
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager")

const employee = [];

inquirer
.prompt ([
//manager questions
    {
        type: 'input',
        name: 'name',
        message: "What is your team manager's name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "What is your team manager's id?"
    },
    
    {
        type: 'input',
        name: 'email',
        message: "What is your team manager's email?"
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is your team manager's office number?"
    },
    {
        type: 'list',
        name: 'addMember',
        message: "What type of team member would you like to add? (use arrow keys)",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        },
])
//engineer questions
inquirer
.prompt ([
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "What is your engineer's id?"
    },
    
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?"
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What is your engineer's GitHub username?"
    },
    {
        type: 'list',
        name: 'addMember',
        message: "What type of team member would you like to add? (use arrow keys)",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        },
])
//intern questions
inquirer
.prompt ([

    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "What is your intern's id?"
    },
    
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does your intern go to?"
    },
    {
        type: 'list',
        name: 'addMember',
        message: "What type of team member would you like to add? (use arrow keys)",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        },
])


// .then((answers) => {
//     console.log(answers)
//     fs.writeFile ('README.md', generateMarkdown(answers), function(err) {
//         if(err){
//             console.log(err)
//         }else {
//             console.log('Creating a new README.md file!')
//         }
//     })
// })
