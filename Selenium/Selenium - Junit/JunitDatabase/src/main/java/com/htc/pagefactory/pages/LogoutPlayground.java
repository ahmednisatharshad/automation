package com.htc.pagefactory.pages;

import java.time.Duration;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

import com.htc.pagefactory.pages.LogoutPlayground;

public class LogoutPlayground {
	private static Logger logger = LogManager.getLogger(LogoutPlayground.class);

	WebDriver driver;
	@FindBy(xpath ="//*[@id=\"widget-navbar-217834\"]/ul/li[6]/a/div/span")
	WebElement account;
	@FindBy(xpath ="//*[@id=\"widget-navbar-217834\"]/ul/li[6]/ul/li[6]/a")
	WebElement logout;
public LogoutPlayground(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		}
public void logout() {
Actions action = new Actions(driver);
WebElement mousehover =account;
if(mousehover.isDisplayed()) {
	action.moveToElement(mousehover).perform();
	logout.click();
	logger.info("Log out successfully");
}}
}
