//required packages to use app
const inquirer = require('inquirer');
const fs = require('fs')
//required documents
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager")
const {generateHTML} = require("./src/generateHTML");

//array to take in answers
const employeeArray = [];

//function to start the questions
const team = () => {
    //manager questions
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
            //promise that saves the answers of the manager questions and pushing them to the employeeArray
            .then((managerInput) => {
                const { name, id, email, officeNumber } = managerInput
                const manager = new Manager(name, id, email, officeNumber)
                employeeArray.push(manager)
                createTeam()
            })
    }
    addManager()
    //prompt to add another team memeber
    const createTeam = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'addMember',
                message: "What type of team member would you like to add? (use arrow keys)",
                choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
            }
        ])
            //promise to call correct employee function
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
    //engineer questions
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
        //promise to save the answers and push them to the employeeArray
            .then((engineerInput) => {
                const { name, id, email, gitHub } = engineerInput
                const engineer = new Engineer(name, id, email, gitHub)
                employeeArray.push(engineer)
                createTeam()
            })
    }
    //intern questions
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
            //promise to save the answers and push them to the employeeArray
            .then((internInput) => {
                const { name, id, email, school } = internInput
                const intern = new Intern(name, id, email, school)
                employeeArray.push(intern)
                createTeam()
            })
    }
    //function to create the HTML file and write the answers using generateHTML
    const createHTML= () => {
        fs.writeFile('./dist/index.html', generateHTML(employeeArray), function(err) {
            if(err) {
                console.log(err)
            }else {
                console.log('Your team profile is being generated!')
            }
        })
    }
};

//calls the function to start it
team()
