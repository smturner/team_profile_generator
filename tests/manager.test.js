// const { it } = require('@jest/globals')
// const { describe } = require('yargs')
// const { expect } = require('@jest/globals');
const Manager = require('../lib/manager')

describe('Manager', ()=> {
    it('Can create a new manager instance', () => {
        const manager = new Manager ();
        expect (typeof (manager)).toBe("object")
    })

    it('Can set officeNumber through constructor argument', ()=>{
        const eOfficeNumber = 100
        const manager = new Manager ('random', 'random', 'random', eOfficeNumber);
        expect(manager.officeNumber).toBe(eOfficeNumber);
    })

    describe('getOfficeNumber()', () =>{
        it ('can get office number through getOfficeNumber()', () => {
            const eOfficeNumber = 54
            const manager = new Manager ('random', 'random', 'random', eOfficeNumber);
            expect(manager.getOfficeNumber()).toBe(eOfficeNumber);
        })
    })
    describe('getRole()', () => {
        it('Can return "Manager"', () => {
            const managerRole = 'Manager'
            const manager = new Manager (managerRole);
            expect (manager.getRole()).toBe(managerRole)
        })
    })
})

