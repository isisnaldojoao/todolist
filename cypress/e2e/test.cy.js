
describe('Task´s', () => {

    // Code for acess to site
    beforeEach(() =>{
        cy.visit('http://127.0.0.1:5500/index.html')
    });

    // Call function for test the aplication
    it('Add input', () => {

      createTask("Teste automação","Estudos")
      cy.get('ul').should('contain',"Teste automação")

      
    });

    // Testing input
    it('Add output', () => {

        createTask("Freelance","")

        cy.get('ul').should('contain',"Freelance")

      });

    // Testing remove output
    it('Remove output',()=>{
        createTask("Freelance","")

        cy.contains("ul","Freelance")// Reference
            .parent() // element father
            .find('svg') // element children
            .click()

        cy.get('ul').should('have.length',0)

    })

  });

  // Function  for call elements in the test for to add and remove elements
function createTask(task,option){
    cy.get('.task').click()

      cy.get('#inTodo').type(task)
      cy.get('#taskOptions').select(option)
      cy.get('button').click()

}