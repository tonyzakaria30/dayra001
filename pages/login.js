 
export class login {
 
    // Locators 
  login_phone = "//input[@id='phoneNumber']"
  login_password = "//input[@name='pinCode']"
  assert_login = "//div[@class='false']/p"
    
    
    // Methods
    loginPhone()
    {
        cy.xpath(this.login_phone).type("01013566878");
    }
    loginPassword()
    {
        cy.xpath(this.login_password).type("28369{Enter}");
    }
    
    assertOnLogin()
    {
        cy.xpath(this.assert_login).should('have.text', 'هيجيلك كود من 6 أرقام لتأكيد رقم الموبايل');
    }
  
     }
     export default new login (); 