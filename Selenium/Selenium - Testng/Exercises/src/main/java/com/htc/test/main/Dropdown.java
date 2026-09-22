package com.htc.test.main;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;
import java.time.Duration;
import java.util.List;


import org.openqa.selenium.support.ui.Select;



public class Dropdown{
	private static Logger logger = LogManager.getLogger(Dropdown.class);
	public static void main(String[] args) throws Exception {
		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());
		driver.get(PropertyReader.getJSURL());
		driver.manage().window().maximize();
		WebElement dropdown = driver.findElement(By.id("multiple-select-example"));
		Select select = new Select(dropdown);
		if(select.isMultiple()) {
			logger.info("Multiple choices are allowed");
    }else {
    	logger.warn("Multiple choices are not allowed");
    }
		select.selectByVisibleText("Peach");
		logger.info("Peach");
		Thread.sleep(3000);
		select.selectByValue("orange");
		logger.info("Orange");
		Thread.sleep(3000);
		select.selectByIndex(0);
		logger.info("Apple");
		Thread.sleep(3000);
		WebElement sinDropdown = driver.findElement(By.id("carselect"));
		Select select2 = new Select(sinDropdown);
		if (select2.isMultiple()) {
//			 System.out.println("Multiple choices are not allowed"); 
		logger.info("Multiple choices are allowed");
	} else {
//			    System.out.println("Multiple choices are not allowed"); 
		logger.warn("Multiple choices are not allowed");
	}
		select2.selectByIndex(2);
		logger.info("Honda");
		Thread.sleep(3000);
		driver.close();
//Wikipedia auto complete and auto search
	    
	    
	}}