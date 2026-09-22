package com.htc.redbus.driver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class DriverFactory {
	
	// TODO Auto-generated method stub
	public static WebDriver genDriver(String browsername) {
		WebDriver driver=null;
		switch(browsername) {
			case "chrome":
				System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
				ChromeOptions options = new ChromeOptions();
				options.addArguments("--disable-notifications");
				options.addArguments("--disable-extensions");
				options.addArguments("--disable-popup-blocking");
				options.addArguments("--disable-infobars");
				options.addArguments("--start-maximized");
				driver = new ChromeDriver(options);
				break;
				
			case "firefox":
				System.setProperty("webdriver.gecko.driver", "geckodriver.exe");
				driver = new FirefoxDriver();
				break;
				
			case "edge":
				System.setProperty("webdriver.edge.driver", "msedgedriver.exe");
			    driver = new EdgeDriver();
				break;
				
			case "ie":
				System.setProperty("webdriver.iedriver.driver", "IEDriverServer.exe");
					driver=new InternetExplorerDriver();
					break;
			default:
				System.out.println("Invalid browsername....");		
		}
		return driver;
	}

}