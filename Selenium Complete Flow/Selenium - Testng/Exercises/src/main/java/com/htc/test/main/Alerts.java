package com.htc.test.main;

import java.time.Duration;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;

public class Alerts {
	public static Logger logger = LogManager.getLogger(Alerts.class);

	public static void main(String[] args) throws Exception {
		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());
		driver.get(PropertyReader.getAlert());
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

		handleSimpleAlert(driver);

		handleConfirmAlertOK(driver);

		handleConfirmAlertCancel(driver);

		handlePromptAlertOK(driver);

		handlePromptAlertCancel(driver);

		driver.quit();
	}

	public static void handleSimpleAlert(WebDriver driver) throws InterruptedException {

		// simple Alert
		WebElement simpleAlert = driver.findElement(By.cssSelector("button[onclick='jsAlert()']"));
		simpleAlert.click();

		Alert alert = driver.switchTo().alert();
		if (alert.getText().equals("I am a JS Alert")) {
			logger.info("Alert message is correctly displayed");
		} else {
			logger.warn("Alert message is not displayed");
		}
		alert.accept();
		Thread.sleep(3000);

	}

	// Confirm Alert OK
	public static void handleConfirmAlertOK(WebDriver driver) throws InterruptedException {
		WebElement confirmAlert = driver.findElement(By.cssSelector("button[onclick='jsConfirm()']"));
		confirmAlert.click();

		Alert alert1 = driver.switchTo().alert();
		if (alert1.getText().equals("I am a JS Confirm")) {
			logger.info("Confirmation alert messgae validated successfully");
		} else {
			logger.info("Confirmation alert message mismatch");
		}
		alert1.accept();
		Thread.sleep(3000);

		WebElement result = driver.findElement(By.id("result"));

		if (result.getText().equals("You clicked: Ok")) {
			logger.info("Confirmation alert result validated Successfully");
		} else {
			logger.info("Confirmation alert result mismatch");
		}

	}
	// Confirm Alert Cancel

	public static void handleConfirmAlertCancel(WebDriver driver) throws InterruptedException {
		WebElement confirmAlert = driver.findElement(By.cssSelector("button[onclick='jsConfirm()']"));
		confirmAlert.click();

		Alert alert1 = driver.switchTo().alert();
		if (alert1.getText().equals("I am a JS Confirm")) {
			logger.info("Confirmation alert message validated successfully");
		} else {
			logger.info("Confirmation alert message mismatch");
		}
		alert1.dismiss();
		Thread.sleep(3000);

		WebElement result = driver.findElement(By.xpath("//*[@id='result']"));

		if (result.getText().equals("You clicked: Cancel")) {
			logger.info("Confirmation cancel  result validated Successfully");
		} else {
			logger.info("Confirmation alert result mismatch");
		}
	}

	// prompt alert Okay
	public static void handlePromptAlertOK(WebDriver driver) throws Exception {
		WebElement promptAlertButton = driver.findElement(By.cssSelector("button[onclick='jsPrompt()']"));
		promptAlertButton.click();

		Alert alert = driver.switchTo().alert();
		Thread.sleep(2000);

		if (alert.getText().equals("I am a JS prompt")) {
			logger.info("Prompt alert message verified");
		} else {
			logger.info("Prompt alert message mismatch");
		}

		alert.sendKeys(PropertyReader.getUserName());
		alert.accept();

		WebElement result = driver.findElement(By.xpath("//*[@id='result']"));
		if (result.getText().equals("You entered: student")) {
			logger.info("Prompt alert accept result validated successfully");
		} else {
			logger.info("Prompt alert accept result mismatch");
		}
	}

	// prompt alert cancel
	public static void handlePromptAlertCancel(WebDriver driver) throws Exception {
		WebElement promptAlertButton = driver.findElement(By.cssSelector("button[onclick='jsPrompt()']"));
		promptAlertButton.click();

		Alert alert = driver.switchTo().alert();
		Thread.sleep(2000);

		if (alert.getText().equals("I am a JS prompt")) {
			logger.info("Prompt alert message verified");
		} else {
			logger.info("Prompt alert message mismatch");
		}

		alert.sendKeys(PropertyReader.getUserName());
		alert.dismiss();

		WebElement result = driver.findElement(By.xpath("//*[@id='result']"));
		if (result.getText().equals("You entered: null")) {
			logger.info("Prompt alert dismiss result validated successfully");
		} else {
			logger.info("Prompt alert dismiss result mismatch");
		}
	}
}