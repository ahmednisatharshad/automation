package com.htc.pom.testclass;
import org.openqa.selenium.WebDriver;
import com.htc.pom.driver.DriverFactory;
import com.htc.pom.pages.CartPlayground;
import com.htc.pom.pages.LoginPlayground;
import com.htc.pom.pages.LogoutPlayground;
import com.htc.pom.util.PropertyReader;
public class Main {

	public static void main(String[] args) throws Exception {
		WebDriver driver = DriverFactory.genDriver(PropertyReader.getbrowser());
		driver.get(PropertyReader.getwebsite());
		
		LoginPlayground login = new LoginPlayground(driver);
		CartPlayground cartdetail =new CartPlayground(driver);
		LogoutPlayground logout = new LogoutPlayground(driver);
	try {
		login.sign_In();
		cartdetail.GoHome();
//		cartdetail.Picking();
		cartdetail.addCartDetails();
		cartdetail.viewcart();
		cartdetail.checkout();
		logout.logout();

	} finally {
			Thread.sleep(10000);
//		driver.close();
	}}}


