
// const generateHTML = team => {

    const generateManager = (data) => {
        console.log('here is the data.name information', data.name)
        return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${data.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${data.id}</p>
            <p class="email">Email: <a href="mailto:${data.email}">${data.email}</a></p>
            <p class="officeNumber">Office Number: ${data.officeNumber}</p>
        </div>
    </div>
</div>
    `;

    };

    const generateEngineer = (data) => {
        return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${data.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id"> Id: ${data.id}</p>
            <p class="email"> Email: <a href= "mailto:${data.email}">${data.email}</a></p>
            <p class="gitHub">GitHub: <a href="https://github.com/${data.gitHub}" target="blank">${data.gitHub}</a></p>
        </div>
    </div>
</div>
    `
    }

    const generateIntern = (data) => {
        return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
                <h3>${data.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id"> Id: ${data.id}</p>
                <p class="email">Email: <a href= "mailto:${data.email}">${data.email}</a></p>
                <p class="school"> School: ${data.school}</p>
            </div>
        </div>
    </div>
    `
    }

const generateHTML = (data) => {
    cardsArray= []
for (let i=0; i< data.length; i++) {
    let employee = data[i];
    let role=employee.getRole();
    switch(role) {
        case 'Manager':
            console.log('here is the data for employee manager', employee)
         generateManager(employee);
         cardsArray.push(generateManager(employee));
            break;
        case 'Engineer' :
            generateEngineer(employee);
            cardsArray.push(generateengineer(employee));
        break;
        case 'Intern':
            generateIntern(employee);
            cardsArray.push(generateIntern(employee))
            break; 
    }

}

}

// const teamCards = cardsArray.join ('')
// const generateTeam = generateTeamPage();
// return generateTeam;

// const generateTeamPage = () => {
//     return `
//     <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
//         integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
//     <title>Document</title>

// </head>

// <body>

//     <div class="jumbotron jumbotron-fluid" style="background-color: rgb(231, 141, 129); color: white;">
//         <div class="container">
//             <h1 class="display-4">Meet the Team</h1>
//         </div>
//     </div>
//     <div class= "container">
//     <div class = "row">
//     ${generateTeam}
//     /div>
// </div>
// </body>

// </html>
//     `

    module.exports = generateHTML