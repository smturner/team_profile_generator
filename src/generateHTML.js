
// const generateHTML = team => {

    const generateManager = (manager) => {
        // console.log('here is the data.name information', manager.name)
         `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
    `;

    };

    const generateEngineer = (engineer) => {
         `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id"> Id: ${engineer.id}</p>
            <p class="email"> Email: <a href= "mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="gitHub">GitHub: <a href="https://github.com/${engineer.gitHub}" target="blank">${engineer.gitHub}</a></p>
        </div>
    </div>
</div>
    `
    }

    const generateIntern = (intern) => {
         `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id"> Id: ${intern.id}</p>
                <p class="email">Email: <a href= "mailto:${intern.email}">${intern.email}</a></p>
                <p class="school"> School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
    }

generateHTML = (data) => {
    cardsArray= [];

for (let i=0; i< data.length; i++) {
    const employee = data[i];
    console.log('this is the data from', employee)
    const role = employee.getRole(); 
    console.log(role)
    
    switch(role) {
        case 'Manager':
            // console.log('here is the data for employee manager', employee)
         generateManager(employee);
         cardsArray.push(generateManager(employee));
            break;
        case 'Engineer' :
            generateEngineer(employee);
            cardsArray.push(generateEngineer(employee));
        break;
        case 'Intern':
            generateIntern(employee);
            cardsArray.push(generateIntern(employee))
            break; 
    }

}
const teamCards = cardsArray.join ('')
const generateTeam = generateTeamPage(teamCards);
return generateTeam;

}



const generateTeamPage = function (teamCards)  {
    `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <title>Document</title>

</head>

<body>

    <div class="jumbotron jumbotron-fluid" style="background-color: rgb(231, 141, 129); color: white;">
        <div class="container">
            <h1 class="display-4">Meet the Team</h1>
        </div>
    </div>
    <div class= "container">
    <div class = "row">
    ${teamCards}
    /div>
</div>
</body>

</html>
    `
}

    module.exports = generateHTML