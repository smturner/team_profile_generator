const Engineer = require('../lib/engineer')

describe('Engineer', ()=> {
    it('Can create a new engineer instance', () => {
        const engineer = new Engineer ();
        expect (typeof (engineer)).toBe("object")
    })

    it('Can set gitHub through constructor argument', ()=>{
        const eGitHub = "test"
        const engineer = new Engineer ('random', 'random', 'random', eGitHub);
        expect(engineer.gitHub).toBe(eGitHub);
    })

    describe('getGitHub()', () =>{
        it ('Can get gitHub through getGitHub()', () => {
            const eGigHub = "test"
            const engineer = new Engineer ('random', 'random', 'random', eGigHub);
            expect(engineer.getGitHub()).toBe(eGigHub);
        })
    })
    describe('getRole()', () => {
        it('Can return "Manager"', () => {
            const managerRole = 'Manager'
            const engineer = new Engineer (managerRole);
            expect (engineer.getRole()).toBe(managerRole)
        })
    })
})
