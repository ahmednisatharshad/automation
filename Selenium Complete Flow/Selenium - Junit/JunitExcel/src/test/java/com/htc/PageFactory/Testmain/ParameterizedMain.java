package com.htc.PageFactory.Testmain;

import org.junit.AfterClass;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.WebDriver;

import com.htc.PageFactory.Junitpages.TestPages;
import com.htc.pagefactory.driver.DriverFactory;
import com.htc.pagefactory.util.PropertyReader;

public class ParameterizedMain {
	public static WebDriver driver;
	static TestPages tstpgs;
	@BeforeEach
	 void setUpBeforeClass() throws Exception {
		driver= DriverFactory.genDriver(PropertyReader.getbrowser());
		driver.get(PropertyReader.getwebsite());
		tstpgs = new TestPages(driver);
	}
	@AfterClass
	 void setUpAfterClass() throws Exception {
		tstpgs.driverClose();
	}
	
	@ParameterizedTest(name="Test with data: username: {0} and password: {1}")
	@MethodSource("com.htc.pagefactory.excelutil.ReadMulExcel#getStream")
	void testWithExcelData(String username, String password) throws Exception{
		tstpgs.sign_Innew(username, password);
		tstpgs.cartdetails();
		tstpgs.click_on_logout();
	}
	}