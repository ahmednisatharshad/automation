package com.htc.pagefactory.pages;

import java.time.Duration;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.Status;
import com.htc.pagefactory.driver.ExtendReport;
import com.htc.pagefactory.util.PropertyReader;

public class LoginPlayground extends ReportBase {
	private static Logger logger = LogManager.getLogger(LoginPlayground.class);
	ExtendReport u = new ExtendReport();
	WebDriver driver;

	public LoginPlayground(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
	}

	@FindBy(xpath = "//*[@id='input-email']")
	WebElement userName;
	@FindBy(xpath = "//*[@id='input-password']")
	WebElement password;
	@FindBy(xpath = "//*[@id='content\']/div/div[2]/div/div/form/input")
	//className = "btn btn-primary"
	WebElement loginButton;

	public void sign_In() throws Exception {

//		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//		wait.until(ExpectedConditions.visibilityOf(userName));

		if (userName.isEnabled()) {
			test.log(Status.PASS, "UserName is Enabled");
//			logger.info("UserName is Enabled");
			userName.sendKeys(PropertyReader.getemail());
			test.log(Status.PASS, (MediaEntityBuilder.createScreenCaptureFromPath(u.capture(driver)).build()));
		} else
//			logger.warn("userName is not enabled");
			test.log(Status.FAIL, "UserName is NOT Enabled");
		if (password.isEnabled()) {
			test.log(Status.PASS, "Password is Enabled");
//			logger.info("Password is Enabled");
			password.sendKeys(PropertyReader.getpassword());
		} else
			test.log(Status.FAIL, "Password is not Enabled");
//			logger.warn("Password is not enabled");

		if (loginButton.isEnabled()) {
			test.log(Status.PASS, "Login Button is Enabled");
//			logger.info("Login Button is Enabled");
			loginButton.click();
			extent.flush();
		} else {
			test.log(Status.FAIL, "Login Button is  not Enabled");
//		logger.info("Log in successfully");
			logger.info("Login Button is not enabled");
//			extent.endTest(test);
//			extent.flush();
			Thread.sleep(4000);
		}
	}
}
