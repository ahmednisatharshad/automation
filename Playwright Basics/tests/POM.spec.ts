import {expect, test} from '@playwright/test'
import { Login } from '../POM/Login'
import { Home } from '../POM/Carting';
import { Logout } from '../POM/Logout';

let status:boolean|undefined;

test('POM test',async ({page})=>{

  test.slow()


//Login
const login=new Login(page);
await login.gotoLoginPage()
await login.login('contact.arshad10@gmail.com','msdhoni7')
await page.waitForTimeout(3000)

//carting
const carting =new Home(page)
await carting.addProductToCart()
await page.waitForTimeout(1000)


//Logout
const logsout = new Logout(page)
await logsout.logout()
await page.waitForTimeout(1000)

})