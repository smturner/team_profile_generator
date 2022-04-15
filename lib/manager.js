const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        super (name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber () {
        return this.officeNumber;
    }
    
}

module.exports = Manager;
// const manager= new Manager('Kelsey', 'Manager',)
// console.log("Employee manager")
// manager.getName();
// manager.getRole();
// manager.getId();
// manager.getEmail();

