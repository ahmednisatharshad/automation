package com.htc.test.main;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;

public class RadioCheckBox {
	private static Logger logger = LogManager.getLogger(RadioCheckBox.class);

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub

		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());
		driver.get(PropertyReader.getJSURL());
		driver.manage().window().maximize();
		String pageTitle = driver.getTitle();
		String actualTitle = "Practice Page";
		System.out.println("Page title:" + pageTitle);
		if (actualTitle.equals(pageTitle))
//			System.out.println("Navigated to the correct URL");
			logger.info("Navigated to the correct URL");
		else
//			System.out.println("Invalid url");
			logger.warn("Invalid url");
		List<WebElement> btns = driver.findElements(By.name("cars"));
		for (WebElement ele : btns) {
			System.out.println(ele.getAttribute("value"));
		}
		// click on a radio button
		WebElement radioBtn = driver.findElement(By.xpath("//input[@id ='hondaradio']"));
		if (radioBtn.isEnabled()) {
			logger.info("RadioButton is enabled");
			radioBtn.click();
			Thread.sleep(3000);
		} else
			logger.warn("radio button is not enabled");
		WebElement checkbox1 = driver.findElement(By.xpath("//input[@id='bmwcheck']"));
		if (checkbox1.isDisplayed())
			logger.info("Checkbox1 is displayed");
		else
			logger.warn("Checkbox1 is not displayed");
		if (checkbox1.isSelected()) {
			logger.info("Checkbox1 is selected");
		} else {
			logger.info("Checkbox1 is not selected");
			if (checkbox1.isEnabled()) {
				logger.info("Checkbox1 is enabled");
				checkbox1.click();

			}
		}
		WebElement checkbox2 = driver.findElement(By.xpath("//input[@id='benzradio']"));
		if (checkbox2.isDisplayed())
			logger.info("Checkbox2 is displayed");
		else
			logger.warn("Checkbox2 is not displayed");
		if (checkbox2.isSelected()) {
			logger.info("Checkbox2 is selected");
		} else {
			logger.info("Checkbox2 is not selected");
			if (checkbox2.isEnabled()) {
				logger.info("Checkbox2 is enabled");
				checkbox2.click();
			}
		}
		Thread.sleep(3000);
		checkbox2.click();
		checkbox1.click();
		Thread.sleep(3000);
		List<WebElement> checkboxes = driver.findElements(By.cssSelector("[type='checkbox']"));
		for (WebElement checkbox : checkboxes) {
			checkbox.click();
		}

		Thread.sleep(3000);
		driver.close();
	}

}