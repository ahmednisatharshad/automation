package com.htc.PageFactory.Testmain;

import org.junit.AfterClass;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.WebDriver;

import com.htc.PageFactory.Junitpages.TestPages;
import com.htc.pagefactory.driver.DriverFactory;
import com.htc.pagefactory.util.PropertyReader;

public class ParameterizedMain {
	public static  WebDriver driver;
	static TestPages TestPage;
	
	
	@BeforeAll
	 static void setup() throws Exception {
//		TestPage.initiateBrowser();
		driver = DriverFactory.genDriver(PropertyReader.getbrowser());
		driver.get(PropertyReader.getwebsite());
		TestPage = new TestPages(driver);
		TestPage.initdb();
	}
	
	@AfterAll
	static void setUpAforeClass() throws Exception {
		TestPage.driverClose();
		TestPage.teardowndb();
	}
	
	@DisplayName("Parameterized Test with Database Data")
	@ParameterizedTest(name = "Test with data: userName:{0} and password:{1}")//dbDataProvider
    @MethodSource("com.htc.pagefactory.dbutil.MultipleDB#dbDataProvider")
	public void runTest(String uname, String pwd) throws Exception {
		TestPage.click_on_Mullogin(uname,pwd);
		TestPage.cartdetails();
		TestPage.click_on_logout();
		
	}

}