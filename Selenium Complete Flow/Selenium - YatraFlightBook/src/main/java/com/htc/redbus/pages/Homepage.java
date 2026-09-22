package com.htc.redbus.pages;

import java.time.Duration;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.Status;
import com.htc.redbus.driver.ExtentReport;


public class Homepage extends ReportBase {
	private static Logger logger = LogManager.getLogger(Homepage.class);
	WebDriver driver;

public Homepage(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
}
By roundTrip = By.xpath("(//input[@type='radio'])[1]");
By departurePlace = By.xpath("//div[@class='MuiBox-root css-1ek1ggs']");
By departureText = By.xpath("//*[@id=\"input-with-icon-adornment\"]");
By chennai = By.xpath("(//div[@class=\"fw-600 mb-0\"])[4]");
By mumbai = By.xpath("//p[@title=\"Mumbai\"]");
By departureDate = By.xpath("//div[@class=\"css-w7k25o\"]");
By returnDate = By.xpath("//span[@class=\"css-xf2jy5\"]");
By date = By.xpath("//div[@class='react-datepicker__month']//div//div//span[text()='20']");
By travellersClass = By.xpath("//div[@class='css-18xmiyx']");
By adultCount = By.xpath("(//li[@class=\"css-1qxeafk\"])[2]");
By childCount = By.xpath("(//li[@class=\"css-1qxeafk\"])[9]");
By premiumClass = By.xpath("//*[@id=\"traveller_container\"]/div[2]/div/div[1]/label[2]/span[1]/input");
By searchBtn = By.xpath("(//div[@class=\"MuiBox-root css-0\"])[10]");
By checkTravellers = By.xpath("//*[@id=\"drop-down-input\"]");
By nonStopFlightsCheckbox = By.xpath("(//input[@type=\"checkbox\"])");
By doneBtn = By.xpath("//button[text()='Done']");

public void searchFlight() throws Exception {
    Thread.sleep(2000);
    WebElement radioBtn = driver.findElement(roundTrip);
    if (radioBtn.isEnabled()) {
        logger.info("RadioButton is enabled");
        radioBtn.click();
    }

    WebElement checkbox = driver.findElement(nonStopFlightsCheckbox);
    if (checkbox.isEnabled()) {
        logger.info("Checkbox is enabled");
        checkbox.click();
        test.log(Status.PASS,"Searching Non Stop Flights are enabled");
    }

    driver.findElement(departurePlace).click();
    test.log(Status.PASS, (MediaEntityBuilder.createScreenCaptureFromPath(ExtentReport.capture(driver)).build()));
    Thread.sleep(3000);

    driver.findElement(departureText).click();
    logger.info("Clicked on the Departure Text field.");

    driver.findElement(chennai).click();
    logger.info("Chennai is selected as the departure location.");

    driver.findElement(returnDate).click();
    logger.info("Clicked on the Return Date field.");

    driver.findElement(date).click();
    logger.info("April 20 is selected as the return date.");

    if (driver.findElement(travellersClass).isEnabled()) {
        driver.findElement(travellersClass).click();
        logger.info("TravellersClass button is enabled and clicked.");
    } else {
        logger.info("TravellersClass button is not enabled.");
    }

    if (driver.findElement(adultCount).isEnabled()) {
        driver.findElement(adultCount).click();
        logger.info("Adult option is enabled and clicked.");
    } else {
        logger.info("Adult option is not enabled.");
    }

    if (driver.findElement(childCount).isEnabled()) {
        driver.findElement(childCount).click();
        logger.info("Child option is enabled and clicked.");
    } else {
        logger.info("Child option is not enabled.");
    }

    if (driver.findElement(premiumClass).isEnabled()) {
        driver.findElement(premiumClass).click();
        logger.info("Premium option is enabled and clicked.");
    } else {
        logger.info("Premium option is not enabled.");
    }

    if (driver.findElement(doneBtn).isEnabled()) {
        driver.findElement(doneBtn).click();
        logger.info("Done button is enabled and clicked.");
    } else {
        logger.info("Done button is not enabled.");
    }

    if (driver.findElement(searchBtn).isEnabled()) {
        driver.findElement(searchBtn).click();
        logger.info("Search button is enabled and clicked.");
        test.log(Status.PASS,"Searching the Flight in next page");
        test.log(Status.PASS, (MediaEntityBuilder.createScreenCaptureFromPath(ExtentReport.capture(driver)).build()));
        extent.flush();
    } else {
        logger.info("Search button is not enabled.");
    }
}}