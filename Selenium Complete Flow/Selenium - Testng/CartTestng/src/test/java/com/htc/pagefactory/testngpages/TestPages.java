package com.htc.pagefactory.testngpages;
import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import com.htc.pagefactory.driver.DriverFactory;
import com.htc.pagefactory.pages.CartPlayground;
import com.htc.pagefactory.pages.LoginPlayground;
import com.htc.pagefactory.pages.LogoutPlayground;
import com.htc.pagefactory.util.PropertyReader;

public class TestPages {
	LoginPlayground login; 
	CartPlayground cartdetail;
	LogoutPlayground logout;
	TestPages play;
	
	
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
	public void click_on_login(String uname,String pwd) throws Exception {
	    login = PageFactory.initElements(driver, LoginPlayground.class);
		login.sign_In(uname,pwd);
	}
	public void cartdetails() throws Exception{
		cartdetail = PageFactory.initElements(driver,CartPlayground.class);
		cartdetail.GoHomepage();
		cartdetail.addCartDetail();
		cartdetail.viewcarts();
		cartdetail.testHTCunitprice();
		cartdetail.Checkout();
	}
	public void click_on_logout() throws Exception {
	    logout = PageFactory.initElements(driver, LogoutPlayground.class);
		logout.logout();
		logout.testlogout();
		
	}
	public void driverClose() {
		driver.close();
	}
	   
	 

}