
package com.htc.pagefactory.pages;

import com.aventstack.extentreports.Status;


import java.time.Duration;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginNew extends ReportBase {
	private static Logger logger = LogManager.getLogger(LoginPlayground.class);
	//Database single = new Database();
	WebDriver driver;
	//String[]  data = new String[2];

	public LoginNew(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
	}
	
	@FindBy(xpath = "//*[@id='input-email']")
	WebElement userName;
	@FindBy(xpath = "//*[@id='input-password']")
	WebElement password;
	@FindBy(xpath = "//*[@id='content\']/div/div[2]/div/div/form/input")
	WebElement loginButton;
	@FindBy(xpath = "//*[@id='content']/p[2]")
	WebElement logincheck;
	@FindBy(xpath = "//*[@id=\"content\"]/form/div/table/tbody/tr/td[5]")
	WebElement HTCunitprice;

	public void sign_Innew(String uname,String pwd) throws Exception {

//		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//		wait.until(ExpectedConditions.visibilityOf(userName));
		Thread.sleep(2000);
		if (userName.isEnabled()) {
			test.log(Status.PASS, "UserName is Enabled");
//			logger.info("UserName is Enabled");
			userName.sendKeys(uname);
		} else
//			logger.warn("userName is not enabled");
			test.log(Status.FAIL, "UserName is NOT Enabled");
		if (password.isEnabled()) {
			test.log(Status.PASS, "Password is Enabled");
//			logger.info("Password is Enabled");
			password.sendKeys(pwd);
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

	public void testlogout() {
		String actual = logincheck.getText();
		Assertions.assertEquals(actual, "You have been logged off your account. It is now safe to leave the computer.");
	}

	public void testHTCunitprice() {
		String actual = HTCunitprice.getText();
		Assertions.assertEquals(actual, "$146.00");
	}
}
