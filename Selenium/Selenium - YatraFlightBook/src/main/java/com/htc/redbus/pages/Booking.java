package com.htc.redbus.pages;

import java.time.Duration;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.Status;
import com.htc.redbus.driver.ExtentReport;

public class Booking extends ReportBase {
	private static Logger logger = LogManager.getLogger(Booking.class);
	WebDriver driver;

public Booking(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
}
  
By flight = By.xpath("//*[@id=\"Flight-APP\"]/section/section[2]/section/div[2]/div[2]/div[2]/div[1]");
By section = By.xpath("//input[@class='mr-5']");
By bookNow = By.xpath("//*[@id=\"Flight-APP\"]/section/section[3]/div/div[2]/div[2]/button");

public void bookingFlight() throws Exception {
    
        // Selecting Specific Time at 06:40
      if(  driver.findElement(flight).isEnabled()) {
    	   driver.findElement(flight).click();
    	   test.log(Status.PASS, "Flight is Enabled/Available");
      }else {
    	  test.log(Status.FAIL, "Flight is Enabled/Available");
      }
       
        // Selecting Flight Type
        driver.findElement(section).click();
        test.log(Status.PASS, (MediaEntityBuilder.createScreenCaptureFromPath(ExtentReport.capture(driver)).build()));
      
        // Booking that Flight
        driver.findElement(bookNow).click();
        test.log(Status.PASS, (MediaEntityBuilder.createScreenCaptureFromPath(ExtentReport.capture(driver)).build()));
        extent.flush();
}}

	











