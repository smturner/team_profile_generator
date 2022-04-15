// const { it, expect } = require('@jest/globals')
// const { describe } = require('yargs')
const Intern = require('../lib/intern')

describe('Intern', () => {
    it('Can create a new intern instance', () => {
        const intern = new Intern ();
        expect(typeof (intern)).toBe("object")
    })

    it ('can set school thorugh constructor argument', () => {
        const internSchool = 'UofM'
        const intern = new Intern ('random', 'random', 'random', internSchool);
        expect (intern.school).toBe(internSchool);
    })

    describe('getSchool()', () => {
        it('Can get school through getSchool()', () => {
            const internSchool = 'UofM'
            const intern = new Intern ('random', 'random', 'random', internSchool)
            expect (intern.getSchool()).toBe(internSchool)
        })
    })

    describe('getRole()', () => {
        it('Can return "Intern"', () => {
            const internRole = 'Intern'
            const intern = new Intern (internRole);
            expect (intern.getRole()).toBe(internRole)
        })
    })
})