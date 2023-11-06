export class homePage {
 
    // Locators 
    new_register = '(//button[@type="submit"])[1]'
    new_login = '(//button[@type="submit"])[2]'
    
    
    // Methods
  
    newRegister()
         {
          cy.xpath(this.new_register).click();
         }

    newLogin()
         {
          cy.xpath(this.new_login).click();
         }

     }
     export default new homePage (); 