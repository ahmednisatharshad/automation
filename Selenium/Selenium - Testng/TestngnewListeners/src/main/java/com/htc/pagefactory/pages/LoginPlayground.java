package com.htc.pagefactory.pages;

import java.time.Duration;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.aventstack.extentreports.Status;
import com.htc.pagefactory.excelutil.TestDataProvider;
import com.htc.pagefactory.listeners.Listeners;
import com.relevantcodes.extentreports.LogStatus;

public class LoginPlayground extends Listeners {
	private static Logger logger = LogManager.getLogger(LoginPlayground.class);
	TestDataProvider excelObj = new TestDataProvider();
	WebDriver driver;
//	Object[][] data = new Object[2][2];

	public LoginPlayground(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
	}

	@FindBy(xpath = "//*[@id='input-email']")
	WebElement userName1;
	@FindBy(xpath = "//*[@id='input-password']")
	WebElement password1;
	@FindBy(xpath = "//*[@id='content\']/div/div[2]/div/div/form/input")
	WebElement loginButton;
	@FindBy(xpath = "//*[@id='content']/p[2]")
	WebElement logincheck;
	@FindBy(xpath = "//*[@id=\"content\"]/form/div/table/tbody/tr/td[5]")
	WebElement HTCunitprice;

	public void sign_In(String username, String password) throws Exception {

		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		wait.until(ExpectedConditions.visibilityOf(userName1));

		if (userName1.isEnabled()) {
			test.log(LogStatus.PASS, "UserName is Enabled");
//			logger.info("UserName is Enabled");
			userName1.sendKeys(username);
//			userName.sendKeys(PropertyReader.getemail());
		} else
//			logger.warn("userName is not enabled");
			test.log(LogStatus.FAIL, "UserName is NOT Enabled");
		if (password1.isEnabled()) {
			test.log(LogStatus.PASS, "Password is Enabled");
//			logger.info("Password is Enabled");
			password1.sendKeys(password);
//			password.sendKeys(PropertyReader.getpassword());
		} else
			test.log(LogStatus.FAIL, "Password is not Enabled");
//			logger.warn("Password is not enabled");

		if (loginButton.isEnabled()) {
			test.log(LogStatus.PASS, "Login Button is Enabled");
//			logger.info("Login Button is Enabled");
			loginButton.click();
			extent.flush();
		} else {
			test.log(LogStatus.FAIL, "Login Button is  not Enabled");
//		logger.info("Log in successfully");
			logger.info("Login Button is not enabled");
//			extent.endTest(test);
//			extent.flush();
			Thread.sleep(4000);
		}
	}
}
