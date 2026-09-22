package com.htc.test.main;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.time.Duration;
import java.util.Set;

public class HandleWindows {
	private static Logger logger = LogManager.getLogger(HandleWindows.class);
    public static void main(String[] args) throws Exception {
        
    	WebDriver driver;
    	driver = DriverFactory.genDriver(PropertyReader.get_broswer());
        driver.get(PropertyReader.getwindowurl());

        String originalWindow = driver.getWindowHandle();


        if (driver.getWindowHandles().size() != 1) {
            logger.warn("Unexpected number of windows before clicking the link.");
        } else {
            logger.info("Correct number of windows before clicking the link.");
        }

     
        WebElement link = driver.findElement(By.xpath("//*[@id=\"content\"]/div/a"));
        link.click();

        // Wait for the new window to open
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        wait.until(ExpectedConditions.numberOfWindowsToBe(2));

        // Switch to the new window
        Set<String> allWindows = driver.getWindowHandles();
        String newWindow = null;
        for (String window : allWindows) {
            if (!window.equals(originalWindow)) {
                newWindow = window;
                break;
            }
        }
        if (newWindow == null) {
            throw new RuntimeException("Failed to find the new window.");
        }

        driver.switchTo().window(newWindow);

        // Verify that we are on the new window by checking the title
        
        if (!driver.getTitle().contains("New Window")) {
            throw new RuntimeException("Title of the new window is incorrect.");
            }else {
            logger.info("Title of the new window is correct.");
        }
        Thread.sleep(3000);
      
        // Verify that we are back on the original window
//        if (!driver.getTitle().contains("The Internet")) {
//            throw new RuntimeException("Title of the original window is incorrect after switching back.");
//        } else {
//            logger.info("Title of the original window is correct after switching back.");
//        }

        
        driver.quit();
    }
}
