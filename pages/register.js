 
 
 
 export class register {
 
  // Locators 

  
  next_button = '//button[@type="submit"]'
  company_name = '//input[@name="companyName"]'
  company_Tax = '//input[@name="taxNumber"]'
  user_name = '//input[@name="firstName"]'
  family_name = '//input[@name="familyName"]'
  phone_number = '//input[@name="phoneNumber"]'
  password = '//input[@name="password"]'
  otp = '//input[@name="otp"]'
  assertion_registeration = '//div[@class="mt-4 mb-3"]/p'
  phone_error = '(//div[@class="mt-1"]/p)[2]'
  
  // Methods

         
         clickOnNext()
         {
          cy.xpath(this.next_button).click();
         }
   
         typeCompanyName()
         {
           cy.xpath(this.company_name).type("company");
         }
   
         typeCompanyTax ()
         {
           cy.xpath(this.company_Tax).type("123123123");
         }

         typeUserName(userName)
        {
          cy.xpath(this.user_name).type(userName);
        }

        typeFamilyName(familyName)
        {
          cy.xpath(this.family_name).type(familyName);
        }

        typePhoneNumber(phonNumber)
        {
        cy.xpath(this.phone_number).type(phonNumber);
        } 
        
        typePassword(passWord)
        {
          cy.xpath(this.password).type(passWord);
        }
        
        typeOtp(otp)
        {
          cy.xpath(this.otp).type(otp);
        }

        assertOnRegisteration()
        {
          cy.xpath(this.assertion_registeration).should('have.text', 'هيجيلك كود من 6 أرقام لتأكيد رقم الموبايل');
        }

        assertOnPhoneError()
        {
           cy.xpath(this.phone_error).should('have.text', 'الرقم مسجل بالفعل');
        }
        // Function to generate an Egyptian phone number

        generateRandomEgyptianPhoneNumber() {
          // Egypt's country code
          const countryCode = '0';
        
          // Generate a random area code (between 10 and 19)
          const areaCode = '1' + (Math.floor(Math.random() * 10) + 0);
        
          // Generate a random 8-digit local number
          const localNumber = Math.floor(10000000 + Math.random() * 90000000);
        
          // Concatenate the parts to form the Egyptian phone number
          const egyptianPhoneNumber = `${countryCode}${areaCode}${localNumber}`;
        
          return egyptianPhoneNumber;
        }
        
   
   }
   export default new register (); 