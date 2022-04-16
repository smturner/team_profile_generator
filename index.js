const inquirer = require('inquirer');
const fs = require('fs')
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager")
const generateHTML = require("./src/generateHTML");
// const { default: generate } = require('@babel/generator');

const employeeArray = [];

const team = () => {

    const addManager = () => {
        inquirer.prompt([
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
        ])
            .then((managerInput) => {
                const { name, id, email, officeNumber } = managerInput
                const manager = new Manager(name, id, email, officeNumber)
                employeeArray.push(manager)
                // console.log(manager)
                createTeam()
            })
    }
    addManager()

    const createTeam = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'addMember',
                message: "What type of team member would you like to add? (use arrow keys)",
                choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
            }
        ])
            .then((userInput) => {
                switch (userInput.addMember) {
                    case 'Engineer':
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    default:
                    createHTML()
                }
            })
    }
    const addEngineer = () => {
        inquirer.prompt([
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
        ])
            .then((engineerInput) => {
                const { name, id, email, gitHub } = engineerInput
                const engineer = new Engineer(name, id, email, gitHub)
                employeeArray.push(engineer)
                // console.log(engineer)
                createTeam()
            })
    }
    const addIntern = () => {
        inquirer
            .prompt([

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
            ])
            .then((internInput) => {
                const { name, id, email, school } = internInput
                const intern = new Intern(name, id, email, school)
                employeeArray.push(intern)
                // console.log(intern)
                createTeam()
            })
    }
    
    const createHTML= () => {
        // const htmlPageContent= generateHTML(JSON.stringify (employeeArray))
        // console.log('this is the information being pushed to the array:', employeeArray)
        fs.writeFile('./dist/index.html', JSON.stringify(employeeArray), function(err) {
            if(err) {
                console.log(err)
            }else {
                console.log('Your team profile has been created!')
            }
        } )
    }
};




team()
