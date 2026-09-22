package com.htc.test.main;

import java.time.Duration;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;

public class Frames {

	private static Logger logger = LogManager.getLogger(Frames.class);
	public static void main(String[] args) throws Exception {

		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());

		// Handling simple frame
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
		driver.get(PropertyReader.getFrame());

		// Switching to Frame1
		WebElement frame1 = driver.findElement(By.id("singleframe"));
		driver.switchTo().frame(frame1);

		// performing action inside Simple Frame
		WebElement input = driver.findElement(By.xpath("//input[@type = 'text']"));
		input.sendKeys("Have a great day");
		logger.info("Single frame is tested with given input");
		Thread.sleep(3000);
		driver.switchTo().defaultContent();
		
		// Handling nested Frame
		WebElement nestFrameBtn = driver.findElement(By.xpath("/html/body/section/div[1]/div/div/div/div[1]/div/ul/li[2]/a"));
		nestFrameBtn.click();
		WebElement parentFrame = driver.findElement(By.xpath("//div[@id = 'Multiple']//iframe"));
		driver.switchTo().frame(parentFrame);
		WebElement childFrame = driver.findElement(By.xpath("//div[@class = 'iframe-container']//following::iframe"));
		driver.switchTo().frame(childFrame);

		

		WebElement childFrameEle = driver.findElement(By.xpath("/html/body/section/div/h5"));
		if (childFrameEle.isDisplayed()) {
			logger.info("Its inside internal frame");
		} else {
			logger.info("Not able to find it");
		}

		driver.switchTo().parentFrame();
		driver.switchTo().defaultContent();
		Thread.sleep(3000);
		driver.close();

	}

}