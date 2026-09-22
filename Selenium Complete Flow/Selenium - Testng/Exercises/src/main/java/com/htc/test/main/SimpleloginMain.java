package com.htc.test.main;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;

public class SimpleloginMain {
	private static  Logger logger = LogManager.getLogger(SimpleloginMain.class);

	public static void main(String[] args) throws Exception{
		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());
		driver.get(PropertyReader.gettesturl());
        String pageTitle = driver.getTitle();
		String actualTitle = "Test Login | Practice Test Automation";
		System.out.println("Page title:"+pageTitle);
		if(actualTitle.equals(pageTitle))

			logger.info("Navigated to the correct URL");
		else

			logger.warn("Invalid url");
		//Valid Credentials Login1
		WebElement user = driver.findElement(By.id("username"));
		user.sendKeys(PropertyReader.getUserName());
		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys(PropertyReader.getPassword());	
		driver.findElement(By.id("submit")).click();
		String url = driver.getCurrentUrl();
		String Manualurl = "https://practicetestautomation.com/logged-in-successfully/";
		if(url.equals(Manualurl)) {
			logger.info("It is a correct url");
		}else {
			logger.warn("It is not valid");
		}
		//2nd page
		WebElement Successmsg = driver.findElement(By.xpath("//div[@class='post-content']//following::strong"));
		String success = Successmsg.getText();
		if(success.contains("Congratulations")) {
			logger.info("The textbox has Congratulations");
		}
		else {
			logger.info("The textbox do not have Congratulations");
		}
		//Incorrect Username login 
		driver.get(PropertyReader.gettesturl());
		WebElement incorrectuser = driver.findElement(By.id("username"));
		incorrectuser.sendKeys(PropertyReader.getIncorrectUser());
		WebElement password1 = driver.findElement(By.id("password"));
		password1.sendKeys(PropertyReader.getPassword());	
		driver.findElement(By.id("submit")).click();

		WebElement errorMsg = driver.findElement(By.cssSelector(".show"));
		if(errorMsg.isDisplayed()) {
			logger.info("Error message is not displayed");
		}
		else {
			logger.info("Error message is displayed");
		}
		
		//Incorrect Password Login
		driver.get(PropertyReader.gettesturl());
		WebElement correctuser = driver.findElement(By.id("username"));
		correctuser.sendKeys(PropertyReader.getUserName());
		WebElement incorctPass = driver.findElement(By.id("password"));
		incorctPass.sendKeys(PropertyReader.getIncorrectPass());	
		driver.findElement(By.id("submit")).click();

		WebElement errorMsg1 = driver.findElement(By.cssSelector(".show"));
		if(errorMsg1.isDisplayed()) {
			logger.info("Error message is not displayed");
		}
		else {
			logger.info("Error message is displayed");
		}
	    Thread.sleep(5000);
	    driver.close();
	}
}

