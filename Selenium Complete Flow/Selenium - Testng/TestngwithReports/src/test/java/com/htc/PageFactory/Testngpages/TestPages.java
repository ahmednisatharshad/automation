package com.htc.PageFactory.Testngpages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.htc.PageFactory.Testmain.PlaygroundTestMain;
import com.htc.pagefactory.pages.CartPlayground;
import com.htc.pagefactory.pages.LoginPlayground;
import com.htc.pagefactory.pages.LogoutPlayground;

public class TestPages {
	LoginPlayground login;
	CartPlayground cartdetail;
	LogoutPlayground logout;
	PlaygroundTestMain play;

     WebDriver driver;

	public TestPages(WebDriver driver) {
		this.driver = driver;
	}

//	public void initiateBrowser() {
//		try {
//			driver = DriverFactory.genDriver(PropertyReader.getbrowser());
//			driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
//			driver.get(PropertyReader.getwebsite());
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
	public void click_on_login(String username, String password) throws Exception {
		login = PageFactory.initElements(driver, LoginPlayground.class);
		login.sign_In(username,password);
	}

	public void cartdetails() throws Exception {
		cartdetail = PageFactory.initElements(driver, CartPlayground.class);
		cartdetail.GoHomepage();
		cartdetail.addCartDetail();
		cartdetail.viewcarts();
		cartdetail.testHTCunitprice();
		cartdetail.testfalseHTCunitprice();
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