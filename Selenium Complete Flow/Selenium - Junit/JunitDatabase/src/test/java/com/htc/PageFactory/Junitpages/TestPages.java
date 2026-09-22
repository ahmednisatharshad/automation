package com.htc.PageFactory.Junitpages;

import java.time.Duration;

import org.junit.gen5.api.Assertions;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.htc.PageFactory.Testmain.PlaygroundTestMain;
import com.htc.pagefactory.dbutil.MultipleDB;
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
	LoginNew Log;
	MultipleDB MulDb = new MultipleDB();
	WebDriver driver;
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
	    login.dbinit();
		login.sign_In();
	}
	public void click_on_Mullogin(String uname,String pwd) throws Exception {
	  Log = PageFactory.initElements(driver, LoginNew.class);
	  Log.sign_Innew(uname,pwd);
	}
	public void initdb() throws Exception {
		MulDb.setUp();
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
		logout.logout();
//		login.testlogout();
		
	}
	public void driverClose() {
		driver.close();
	}
	public void teardowndb() throws Exception {
		MulDb.tearDown();
	}
	   
	 

}