
// const generateHTML = team => {

    const generateManager = () => {
        return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${id}</p>
            <p class="email">Email: <a href="mailto:${email}">${email}</a></p>
            <p class="officeNumber">Office Number: ${officeNumber}</p>
        </div>
    </div>
</div>
    `;

    };

    const generateEngineer = () => {
        return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id"> Id: ${id}</p>
            <p class="email"> Email: <a href= "mailto:${email}">${email}</a></p>
            <p class="gitHub">GitHub: <a href="https://github.com/${gitHub}" target="blank">${gitHub}</a></p>
        </div>
    </div>
</div>
    `
    }

    const generateIntern = () => {
        return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
                <h3>${name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id"> Id: ${id}</p>
                <p class="email">Email: <a href= "mailto:${email}">${email}</a></p>
                <p class="school"> School: ${school}</p>
            </div>
        </div>
    </div>
    `
    }
// generateManager(),
// generateEngineer()
// generateIntern()
// }

const generateHTML = (data) => {
    cardsArray= []
for (let i=0; i< data.length; i++) {
    let employee = data[i];
    let role=employee.getRole();
    switch(role) {
        case 'Manager':
         generateManager(employee);
         cardsArray.push(generateManager());
            break;
        case 'Engineer' :
            generateEngineer(employee);
            cardsArray.push(generateengineer());
        break;
        case 'Intern':
            generateIntern(employee);
            cardsArray.push(generateIntern())
            break; 
    }

}
const teamCards = cardsArray.join ('')
const generateTeam = generateTeamPage(team);
return generateTeam;
}
const generateTeamPage = (team) => {
    return `
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