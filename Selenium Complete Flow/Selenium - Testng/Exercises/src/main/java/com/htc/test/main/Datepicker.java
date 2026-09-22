package com.htc.test.main;


import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;


public class Datepicker{
	private static Logger logger = LogManager.getLogger(Datepicker.class);
	public static void main(String[] args) throws Exception{
		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());
		driver.get(PropertyReader.getDateurl());
		String title = driver.getTitle();
		logger.info("title of the page is:"+title);
		String actual = "Date Picker Dialog Example | APG | WAI | W3C";
		if(actual.equals(title)) {
			logger.info("Navigated to the correct page");
		}
		else {
			logger.warn("Navigated to the wrong page");
		}
		driver.findElement(By.xpath("//*[@id=\"myDatepicker\"]/div[1]/div/button/span")).click();
    	WebElement displayedDate = driver.findElement(By.className("month-year"));

    	 
    	WebElement prevMonthButton = driver.findElement(By.className("prev-month"));
    	
    	int i = 1;
    	while(i != 0) {
    		if(displayedDate.getText().equalsIgnoreCase(PropertyReader.getDate())) {
    			i = 0;
    		}else {
    			prevMonthButton.click();
    			i++;
    		}
    	}

		List<WebElement> alldates = driver.findElements(By.xpath("//table[@class='dates']//td")); 

		for (WebElement dateElement : alldates) {
		    String dateText = dateElement.getText();

		    if (dateText.equals("10")) { 
		        dateElement.click();
		        break;
		    }
		}
        Thread.sleep(3000);
        driver.close();
		}
	}