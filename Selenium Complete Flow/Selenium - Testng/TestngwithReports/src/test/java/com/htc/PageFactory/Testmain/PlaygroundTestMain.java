package com.htc.PageFactory.Testmain;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import com.htc.PageFactory.Testngpages.TestPages;
import com.htc.pagefactory.driver.DriverFactory;
import com.htc.pagefactory.util.PropertyReader;

public class PlaygroundTestMain {
	private static Logger logger = LogManager.getLogger(PlaygroundTestMain.class);
	public static WebDriver driver;
	static TestPages Testpage;

	@BeforeSuite
	public static void setup() throws Exception {
		driver = DriverFactory.genDriver(PropertyReader.getbrowser());
		Testpage = new TestPages(driver);
		driver.get(PropertyReader.getwebsite());
	}

	@Test(dataProvider = "MyTestData", dataProviderClass = com.htc.pagefactory.excelutil.TestDataProvider.class)
	public void runTest(String username, String password) throws Exception {
		System.out.println("hii");
		Testpage.click_on_login(username, password);
		Testpage.cartdetails();
		Testpage.click_on_logout();
//		Testpage.driverClose();
	}

//			public void testlogout() {
//				String actual = logincheck.getText();
//				Assertions.assertEquals(actual, "You have been logged off your account. It is now safe to leave the computer.");
//			}
	@AfterSuite
	public void closure() throws Exception {
		Testpage.driverClose();
	}
}
