package com.htc.PageFactory.Junitpages;

import java.time.Duration;

import org.junit.gen5.api.Assertions;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.htc.PageFactory.Testmain.PlaygroundTestMain;
import com.htc.pagefactory.driver.DriverFactory;
import com.htc.pagefactory.pages.CartPlayground;
import com.htc.pagefactory.pages.LoginNew;
import com.htc.pagefactory.pages.LoginPlayground;
import com.htc.pagefactory.pages.LogoutPlayground;
import com.htc.pagefactory.util.PropertyReader;

public class TestPages {
	LoginPlayground login; 
	CartPlayground cartdetail;
	LogoutPlayground logout;
	PlaygroundTestMain play;
	LoginNew log;
	static WebDriver driver;
	public TestPages(WebDriver driver){
		this.driver=driver;
	}
//	public void initiateBrowser() {
//		try {
//			driver = DriverFactory.genDriver(PropertyReader.getbrowser());
//			driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
//			driver.get(PropertyReader.getwebsite());
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
	public void click_on_login() throws Exception {
	    login = PageFactory.initElements(driver, LoginPlayground.class);
	    login.readDatafromexcel();
		login.sign_In();
	}
	public void sign_Innew(String username, String password) throws Exception {
		// TODO Auto-generated method stub
		log = PageFactory.initElements(driver, LoginNew.class);
		log.sign_Innew(username, password);
	}
	public void cartdetails() throws Exception{
		cartdetail = PageFactory.initElements(driver,CartPlayground.class);
		cartdetail.GoHomepage();
		cartdetail.addCartDetail();
		cartdetail.viewcarts();
//		login.testHTCunitprice();
		cartdetail.Checkout();
	}
	public void click_on_logout() throws Exception {
	    logout = PageFactory.initElements(driver, LogoutPlayground.class);
	    Thread.sleep(2000);
		logout.logout();
//		login.testlogout();
		
	} 
	public void driverClose() throws Exception{
		driver.close();
	}
	

	
}