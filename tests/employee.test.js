
const Employee = require('../lib/employee');

describe('Employee', () => {
    it("Can create new employee instance", () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object")
    });

    it('Can set name through constructor argument', () => {
        const employeeName = 'Kelsey'
        const employee = new Employee(employeeName)
        expect(employee.name).toBe(employeeName)
    })

    it('Can set id through constructor argument', () => {
        const employeeId = 1
        const employee = new Employee('random', employeeId)
        expect(employee.id).toBe(employeeId)
    })

    it('Can set email through constructor argument', () => {
        const employeeEmail = "Test@gmail.com"
        const employee = new Employee('random', 'random', employeeEmail)
        expect(employee.email).toBe(employeeEmail)
    })

    describe('getName', () => {
        it('Can get name through getName()', () => {
            const employeeName = 'Joy'
            const employee = new Employee(employeeName);
            expect(employee.getName()).toBe(employeeName);
        })
    });

    describe('getId', () => {
        it('Can get id through getId()', () => {
            const employeeId = 1
            const employee = new Employee('random', employeeId);
            expect(employee.getId()).toBe(employeeId);
        })
    })

    describe('getEmail', () => {
        it('Can get email through getEmail()', () => {
            const employeeEmail = 'Test@gmail.com'
            const employee = new Employee(employeeEmail);
            expect(employee.getName()).toBe(employeeEmail);
        })
    })
    
    describe('getRole', () => {
        it('Can return "Employee"', () => {
            const employeeRole = 'Employee'
            const employee = new Employee(employeeRole);
            expect (employee.getRole()).toBe(employeeRole)
        })
    })
})
