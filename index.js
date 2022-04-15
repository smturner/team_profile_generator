const inquirer = require ('inquirer');
const jest = require('jest');
const fs = require('fs')
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager")

inquirer
.prompt ([
    // {
    //     type: 'list',
    //     name: 'addMember',
    //     message: "What type of team member would you like to add? (use arrow keys)",
    //     choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
    // }])
    // .then(userInput) => {
    //     switch(userInput.addNewEmployee){
    //         case "Manager" :
    //             add
    //     }
    // }
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the team amanger's id?"
    },
    
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "What is the team manager's office number?"
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
