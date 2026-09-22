package com.htc.pagefactory.testmain;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import com.htc.pagefactory.driver.DriverFactory;
import com.htc.pagefactory.testngpages.TestPages;
import com.htc.pagefactory.util.PropertyReader;

public class Testmain {
	private static Logger logger = LogManager.getLogger(Testmain.class);
	public static WebDriver driver;
	static TestPages Testpage;
//		TestPages Testpage = new TestPages(driver);

	@BeforeMethod
	public static void setup() throws Exception {
		driver = DriverFactory.genDriver(PropertyReader.getbrowser());
		Testpage = new TestPages(driver);
		driver.get(PropertyReader.getwebsite());
	}
   
	@Test(dataProvider = "MyTestData", dataProviderClass=com.htc.pagefactory.excelutil.TestDataProvider.class)
	public void runTest(String uname,String pwd) throws Exception {

		Testpage.click_on_login(uname,pwd);
		Testpage.cartdetails();
		Testpage.click_on_logout();
		Testpage.driverClose();
	}
}