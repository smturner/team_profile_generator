const generateManager = () => {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: ${manager.email}</p>
            <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>
    `
    
}

const generateEngineer = () => {
    return`
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id">${engineer.id}</p>
            <p class="email">${engineer.email}</p>
            <p class="gitHub">${engineer.gitHub}</p>
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
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">${intern.id}</p>
                <p class="email">${intern.email}</p>
                <p class="school">${intern.school}</p>
            </div>
        </div>
    </div>
    `
}
//     <div class= "container">
//         <div class = "row">
//     <div class="col-4 mt-4">
//         <div class="card h-100">
//             <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
//                 <h3>Name</h3>
//                 <h4>Job Title</h4>
//             </div>
//             <div class="card-body">
//                 <p class="id">An item</p>
//                 <p class="email">A second item</p>
//                 <p class="officeNumber">A third item</p>
//             </div>

//         </div>
//     </div>
//     <div class="col-4 mt-4">
//         <div class="card h-100">
//             <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
//                 <h3>Name</h3>
//                 <h4>Job Title</h4>
//             </div>
//             <div class="card-body">
//                 <p class="id">An item</p>
//                 <p class="email">A second item</p>
//                 <p class="officeNumber">A third item</p>
//             </div>

//         </div>
//     </div>
//     <div class="col-4 mt-4">
//         <div class="card h-100">
//             <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
//                 <h3>Name</h3>
//                 <h4>Job Title</h4>
//             </div>
//             <div class="card-body">
//                 <p class="id">An item</p>
//                 <p class="email">A second item</p>
//                 <p class="officeNumber">A third item</p>
//             </div>

//         </div>
//     </div>
//     <div class="col-2"></div>
//     <div class="col-4 mt-4">
//         <div class="card h-100">
//             <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
//                 <h3>Name</h3>
//                 <h4>Job Title</h4>
//             </div>
//             <div class="card-body">
//                 <p class="id">An item</p>
//                 <p class="email">A second item</p>
//                 <p class="officeNumber">A third item</p>
//             </div>

//         </div>
//     </div>
    
//     <div class="col-4 mt-4">
//         <div class="card h-100">
//             <div class="card-header" style="background-color:rgb(231, 170, 129); color:white;">
//                 <h3>Name</h3>
//                 <h4>Job Title</h4>
//             </div>
//             <div class="card-body">
//                 <p class="id">An item</p>
//                 <p class="email">A second item</p>
//                 <p class="officeNumber">A third item</p>
//             </div>

//         </div>
//     </div>
//     <div class="col-2"></div>
// </div>
// </div>
