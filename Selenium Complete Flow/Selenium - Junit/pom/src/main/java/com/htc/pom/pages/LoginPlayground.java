package com.htc.pom.pages;

import com.htc.pom.driver.DriverFactory;
import com.htc.pom.util.PropertyReader;

import java.time.Duration;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;


public class LoginPlayground {
	private static Logger logger = LogManager.getLogger(LoginPlayground.class);

	WebDriver driver;


public LoginPlayground(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
}

	By userName = By.id("input-email");

	By passWord = By.id("input-password");

	By loginButton = By.xpath("//*[@id=\"content\"]/div/div[2]/div/div/form/input");

	public void sign_In() throws Exception {

		if (driver.findElement(userName).isEnabled()) {
			logger.info("UserName is Enabled");
			driver.findElement(userName).sendKeys(PropertyReader.getemail());
		} else
			logger.info("userName is not enabled");

		if (driver.findElement(passWord).isEnabled()) {
			logger.info("Password is Enabled");
			driver.findElement(passWord).sendKeys(PropertyReader.getpassword());
		} else
			logger.info("Password is not enabled");

		if (driver.findElement(loginButton).isEnabled()) {
			logger.info("Login Button is Enabled");
			driver.findElement(loginButton).click();
			logger.info("Log in successfully");
		} else
			logger.info("Login Button is not enabled");
		Thread.sleep(4000);
	}

}
