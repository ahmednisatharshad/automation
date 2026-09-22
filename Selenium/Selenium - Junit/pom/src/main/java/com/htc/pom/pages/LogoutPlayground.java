package com.htc.pom.pages;

import java.time.Duration;
import com.htc.pom.driver.DriverFactory;
import com.htc.pom.util.PropertyReader;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;


public class LogoutPlayground {
	private static Logger logger = LogManager.getLogger(LogoutPlayground.class);

	WebDriver driver;
	
	By account = By.xpath("//*[@id=\"widget-navbar-217834\"]/ul/li[6]/a/div/span");
	By logout = By.xpath("//*[@id=\"widget-navbar-217834\"]/ul/li[6]/ul/li[6]/a");
public LogoutPlayground(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		}
public void logout() {
Actions action = new Actions(driver);
WebElement mousehover = driver.findElement(account);
if(mousehover.isDisplayed()) {
	action.moveToElement(mousehover).perform();
	driver.findElement(logout).click();
	logger.info("Log out successfully");
}

}}
