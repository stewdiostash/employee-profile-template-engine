// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Manager extends Employee {
    constructor(officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // constructor(officeNum){
    //     super(`${answers.name}`,`${answers.id}`,`${answers.email}`);
    //     this.officeNum = `${answers.officeNum}`;
    // }
}

module.exports = Manager;