package com.htc.PageFactory.Testmain;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
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
			}}
//			