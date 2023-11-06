

import register from '../../pages/register';
import homePage from '../../pages/homePage';
import login from '../../pages/login';
import testData from '../../cypress/fixtures/testData.json';


const test = testData;
const register_Page = register;
const home_page = homePage;
const login_page = login;

describe('Registration', () => {


  

  beforeEach(() => {
   
  
    cy.visit('https://kyb.testdayra.com/?passport_client_id=9a75fd18-6b3b-461a-8169-a56249763037&lang=ar')
    cy.wait(1000);
  
  })
  
   
  afterEach(() => {
    cy.log('Closing the browser.');
  })

// Validation on successfull registeration
  
  it('registeration flow', function () {
   
    home_page.newRegister();

    for (let i = 1; i <=3; i++) {
      console.log(i);

    register_Page.clickOnNext();
      
  }

    register_Page.typeCompanyName(test.company.companyname);
    register_Page.typeCompanyTax(test.company.companytax);
    register_Page.clickOnNext();
    register_Page.typeUserName(test.user.username);
    register_Page.typeFamilyName(test.user.familyname);
    register_Page.typePhoneNumber(register_Page.generateRandomEgyptianPhoneNumber());
    register_Page.clickOnNext();

    for (let j=1; j <=2; j++) {
      console.log(j);
      register_Page.typePassword(test.password.rightpassword);
      register_Page.clickOnNext();
    }

      register_Page.typeOtp(testData.otp);
      register_Page.assertOnRegisteration();


  });

  // Validation on login successfully 

  it('login flow', function () {

    home_page.newLogin();
    login_page.loginPhone(test.phone.rightphonenumber);
    login_page.loginPassword(test.password.rightpassword);
    login_page.assertOnLogin();


  })


  // Error handeling on registeration flow (assert on phone number error)

  it('error handeling', function () {

    home_page.newRegister();

    for (let i = 1; i <=3; i++) {
      console.log(i);

    register_Page.clickOnNext();
      
  }

    register_Page.typeCompanyName(test.company.companyname);
    register_Page.typeCompanyTax(test.company.companytax);
    register_Page.clickOnNext();
    register_Page.typeUserName(test.user.username);
    register_Page.typeFamilyName(test.user.familyname);
    register_Page.typePhoneNumber(test.phone.wrongphonenumber);
    register_Page.clickOnNext();
    register_Page.assertOnPhoneError();


  })
   
})

