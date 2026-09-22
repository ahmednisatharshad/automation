// loginPage.locators.ts
export class LoginPageLocators {
  // Login Page
  static headerLogin = 'role=heading[name="Login"]';
  static welcomeText = 'text=LoginWelcome,Login in Book';
  static usernameInput = 'role=textbox[name="UserName"]';
  static passwordInput = 'role=textbox[name="Password"]';
  static loginButton = 'role=button[name="Login"]';
  static newUserButton = 'role=button[name="New User"]';

  // Register Page
  static headerRegister = 'role=heading[name="Register"]';
  static headerRegisterBookStore = 'role=heading[name="Register to Book Store"]';
  static firstNameInput = 'role=textbox[name="First Name"]';
  static lastNameInput = 'role=textbox[name="Last Name"]';
  static registerUsernameInput = 'role=textbox[name="UserName"]';
  static registerPasswordInput = 'role=textbox[name="Password"]';
  static registerButton = 'role=button[name="Register"]';

  // Recaptcha
  static recaptchaIframe = 'iframe[title*="reCAPTCHA"]';
  static recaptchaCheckbox = 'role=checkbox[name="I\'m not a robot"]';

  // Post-login
  static loggedUserText = 'text=User Name : StokesyLog out';

  // Book Store header
  static bookStoreHeader = 'text=Book Store Application';
}
