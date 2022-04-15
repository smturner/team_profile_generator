const inquirer = require ('inquirer');
const jest = require('jest');
const fs = require('fs')

inquirer
.prompt ([
    {
        Message: "Welcome to the team generator!",
       Message: "Use 'npm run reset' to reset the dist folder"
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
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
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this repo?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: [ 'MIT','Apache', 'GNU-3', 'none' ],
    },
])

.then((answers) => {
    console.log(answers)
    fs.writeFile ('README.md', generateMarkdown(answers), function(err) {
        if(err){
            console.log(err)
        }else {
            console.log('Creating a new README.md file!')
        }
    })
})
