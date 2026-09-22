package com.htc.pagefactory.testclass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import com.htc.pagefactory.driver.DriverFactory;
import com.htc.pagefactory.pages.CartPlayground;
import com.htc.pagefactory.pages.LoginPlayground;
import com.htc.pagefactory.pages.LogoutPlayground;
import com.htc.pagefactory.util.PropertyReader;
	public class Main {
		public static void main(String[] args) throws Exception {
			WebDriver driver = DriverFactory.genDriver(PropertyReader.getbrowser());
			driver.get(PropertyReader.getwebsite());
			
			LoginPlayground login =PageFactory.initElements(driver, LoginPlayground.class);
			CartPlayground cartdetail =PageFactory.initElements(driver, CartPlayground.class);
			LogoutPlayground logout = PageFactory.initElements(driver, LogoutPlayground.class);
		try {
//			login.sign_In();
			cartdetail.GoHomepage();
//			cartdetail.Picking();
			cartdetail.addCartDetail();
			cartdetail.viewcarts();
			cartdetail.Checkout();
			logout.logout();

		} finally {
			Thread.sleep(1000);
			driver.close();
		}}}

