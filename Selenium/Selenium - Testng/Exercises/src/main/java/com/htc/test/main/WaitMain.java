package com.htc.test.main;

import java.time.Duration;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;

public class WaitMain {
	private static Logger logger = LogManager.getLogger(WaitMain.class);

	public static void main(String[] args) throws Exception {
		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());
		driver.get(PropertyReader.getWaitURL());
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		String title = driver.getTitle();
		logger.info("title of the page is :" + title);
		String actual = "STORE";
		if (actual.equals(title)) {
			logger.info("Navigated to the correct page");
		} else {
			logger.warn("Navigated to the wrong page");
		}

		WebElement login = driver.findElement(By.linkText("Log in"));
		if (login.isEnabled()) {
			logger.info("Login link is enabled");
			login.click();
		} else {
			logger.warn("Login link is not enabled");
		}
		WebElement user = driver.findElement(By.id("loginusername"));
		if (user.isEnabled()) {
			logger.info("user box is enabled");
			user.sendKeys(PropertyReader.getwaitUserName());
		} else {
			logger.warn("User box is not enabled");
		}
		FluentWait<WebDriver> fluentWait = new FluentWait<>(driver).withTimeout(Duration.ofSeconds(10))
				.pollingEvery(Duration.ofSeconds(2)).ignoring(NoSuchElementException.class);

		WebElement password = fluentWait.until(driverObj -> driverObj.findElement(By.id("loginpassword")));
		if (password.isEnabled()) {
			logger.info("Password box is enabled");
			password.sendKeys(PropertyReader.getwaitPassword());
		} else {
			logger.warn("Password box is not enabled");
		}
		WebElement loginBtn = driver.findElement(By.xpath("//*[@id=\"logInModal\"]/div/div/div[3]/button[2]"));
		if (loginBtn.isEnabled()) {
			logger.info("Login Button is enabled");
			loginBtn.click();
		} else {
			logger.warn("Login Button is not enabled");
		}

		String auto = driver.getCurrentUrl();
//		System.out.println(auto);
		if (auto.contains("https://www.demoblaze.com/")) {
			logger.info("The new page contains the link");
		} else {
			logger.warn("The new page do no contain the link");
		}
		// explicit
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
		wait.until(ExpectedConditions.titleContains("STORE"));

		WebElement logout = driver.findElement(By.id("logout2"));
		if (logout.isDisplayed()) {
			WebDriverWait wait1 = new WebDriverWait(driver, Duration.ofSeconds(10));
			WebElement logoutButton = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("logout2")));
			;
			logger.info("logout is displayed in navigated page");
		} else {
			logger.warn("logout is not displayed in navigated page");
		}

		List<WebElement> products = driver.findElements(By.className("hrefch"));
		logger.info("The count of products is :" + products.size());
		if (products.size() == 9) {
			logger.info("the count is 9");
		} else {
			logger.warn("The count is not 9");
		}
		for (WebElement prods : products) {
			logger.info(prods.getText());
		}
		if (logout.isEnabled()) {
			WebDriverWait wait1 = new WebDriverWait(driver, Duration.ofSeconds(10));
			WebElement logoutButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("logout2")));
			logoutButton.click();
			logger.info("logout is enabled");
		} else {
			logger.warn("logout is not enabled");
		}
//		Thread.sleep(3000);
		driver.quit();
	}

}