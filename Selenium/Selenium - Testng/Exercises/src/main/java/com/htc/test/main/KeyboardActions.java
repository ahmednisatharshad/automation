package com.htc.test.main;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;

public class KeyboardActions {

	private static Logger logger = LogManager.getLogger(KeyboardActions.class);

    public static void main(String[] args) throws Exception {
    	WebDriver driver;
    	driver = DriverFactory.genDriver(PropertyReader.get_broswer());
    	driver.get(PropertyReader.getkeyboardURL());
    	
        
        WebElement fullNameField = driver.findElement(By.xpath("//*[@id='userName']"));
       // fullNameField.sendKeys("John Durairaj");
        fullNameField.sendKeys(PropertyReader.getUserName());

        WebElement emailField = driver.findElement(By.id("userEmail"));
       // emailField.sendKeys("john.durairaj@htc.com");
        emailField.sendKeys(PropertyReader.getEmail());
        
        WebElement currentAddressField = driver.findElement(By.id("currentAddress"));
       // String currentAddress = "123 Main St, Anytown";
        //currentAddressField.sendKeys(currentAddress);
        currentAddressField.sendKeys(PropertyReader.getAddress());
        
        currentAddressField.sendKeys(Keys.CONTROL + "a");

        // Control + C to copy
        currentAddressField.sendKeys(Keys.CONTROL + "c");

        WebElement permanentAddressField = driver.findElement(By.id("permanentAddress"));

        // Control + V to paste into Permanent Address
        permanentAddressField.sendKeys(Keys.CONTROL + "v");

       
        WebElement submitButton = driver.findElement(By.id("submit"));
        submitButton.click();

    
        WebElement nameOutput = driver.findElement(By.id("name"));
        WebElement emailOutput = driver.findElement(By.id("email"));
        WebElement currentAddressOutput = driver.findElement(By.id("currentAddress"));
        WebElement permanentAddressOutput = driver.findElement(By.id("permanentAddress"));

        String actualName = nameOutput.getText();
        String actualEmail = emailOutput.getText();
        String actualCurrentAddress = currentAddressOutput.getText();
        String actualPermanentAddress = permanentAddressOutput.getText();

        logger.info("Actual Name: " + actualName);
        logger.info("Actual Email: " + actualEmail);
        logger.info("Actual Current Address: " + actualCurrentAddress);
        logger.info("Actual Permanent Address: " + actualPermanentAddress);

        if (!actualName.equals("Name:student")) {
        	logger.info("Name verification failed!");
        }
        if (!actualEmail.equals("Email:arshad@htcindia.com")) {
        	logger.info("Email verification failed!");
        }
        if (!actualCurrentAddress.equals("Current Address :123,NGO Colony,France")) {
        	logger.info("Current Address verification failed!");
        }
        if (!actualPermanentAddress.equals("Permanent Address :123,NGO Colony,France")) {
        	logger.info("Permanent Address verification failed!");
        }

        Thread.sleep(3000); 
    }
   
}
