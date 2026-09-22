package com.htc.test.main;

import java.time.Duration;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import java.io.File;
import java.io.IOException;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;

import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;


public class MouseActionsTest {
	private static Logger logger = LogManager.getLogger(MouseActionsTest.class);
	
	public static void main(String[] args) throws Exception {
    	WebDriver driver;
    	driver = DriverFactory.genDriver(PropertyReader.get_broswer());
    	driver.get(PropertyReader.getmousehover());
    	
    	Actions action = new Actions(driver);
//    	Mouse Hover
    	WebElement mousehover = driver.findElement(By.xpath("//*[@id=\"liveclasses\"]"));
    	if(mousehover.isDisplayed()) {
    		action.moveToElement(mousehover).perform();
    		logger.info("Mouse hovered");
    	}
    	else {
    		logger.warn("Mouse not hovered");
    	}
    	
    	
//    	Right Click
    	
    	driver.get(PropertyReader.getrightclick());
    	WebElement rightclick = driver.findElement(By.xpath("//button[@id=\"rightclick\"]"));
    	action.contextClick(rightclick).perform();
    	logger.info("3 options are shown");
    	Thread.sleep(3000);
    	
    	
//		Double Click
    	driver.get(PropertyReader.getdoubleclick());
    	WebElement doubleclick = driver.findElement(By.xpath("//*[@id='HTML10']/div[1]/button"));
    	action.doubleClick(doubleclick).perform();
    	logger.info("Printed Hello World! in Field 2");
    	Thread.sleep(3000);
    	
////		Scroll and View
//    	driver.get(PropertyReader.getscroll());
//    	WebElement scroll = driver.findElement(By.xpath("//*[@id=\"National_birds\"]"));
//    	action.moveToElement(scroll).perform();
//		Thread.sleep(2000);
//		scroll.click();
//    	
//    	Thread.sleep(3000);
	
//      Drag and Drop
    	driver.get(PropertyReader.getdrag());
    	WebElement dragElement = driver.findElement(By.xpath("//*[@id=\"angular\"]"));
		WebElement dropTarget = driver.findElement(By.xpath("//*[@id=\"droparea\"]"));
		action.dragAndDrop(dragElement, dropTarget).perform();
		logger.info("It has dropped successfully");
		Thread.sleep(2000);
    	
    	
    	driver.quit();  	
	}}
	
