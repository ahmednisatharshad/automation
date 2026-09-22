package com.htc.PageFactory.Testmain;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.htc.PageFactory.Junitpages.TestPages;
import com.htc.pagefactory.driver.DriverFactory;
import com.htc.pagefactory.util.PropertyReader;

public class PlaygroundTestMain {
	private static Logger logger = LogManager.getLogger(PlaygroundTestMain.class);

	public static WebDriver driver;

	TestPages Testpage = new TestPages(driver);

	@BeforeAll
	public static void setup() throws Exception {
		driver = DriverFactory.genDriver(PropertyReader.getbrowser());
		driver.get(PropertyReader.getwebsite());
	}

	@Test
	public void runTest() throws Exception {

		Testpage.click_on_login();
		Testpage.cartdetails();
		Testpage.click_on_logout();
		Testpage.driverClose();
	}
}















//			public void testlogout() {
//				String actual = logincheck.getText();
//				Assertions.assertEquals(actual, "You have been logged off your account. It is now safe to leave the computer.");
//			}
//			@AfterAll
//			public void closure() throws Exception{
//				Testpage.driverClose();
//			}
