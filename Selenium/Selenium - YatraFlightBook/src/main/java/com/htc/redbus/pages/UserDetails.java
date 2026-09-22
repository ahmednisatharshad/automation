package com.htc.redbus.pages;

import java.time.Duration;
import java.util.Set;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.htc.redbus.util.PropertyReader;

public class UserDetails extends ReportBase {
	private static Logger logger = LogManager.getLogger(UserDetails.class);
	public  WebDriver driver;

public UserDetails(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
}
public void windows()  {
String originalWindow = driver.getWindowHandle();

if (driver.getWindowHandles().size() != 1) {
    logger.warn("Unexpected number of windows before clicking the link.");
} else {
    logger.info("Correct number of windows before clicking the link.");
}

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
}
By emailId = By.xpath("//*[@id=\"additionalContactEmail\"]");
By phone = By.xpath("//*[@id=\"additionalContactMobile\"]");
By adult1 = By.xpath("//*[@id=\"travellerf0\"]");
By titleAdult1 = By.xpath("//*[@id=\"title0\"]");
By adult2 = By.xpath("//*[@id=\"travellerf1\"]");
By titleAdult2 = By.xpath("//*[@id=\"title1\"]");
By adult3 = By.xpath("//*[@id=\"travellerf2\"]");
By titleAdult3 = By.xpath("//*[@id=\"title2\"]");
By child = By.xpath("//*[@id=\"travellerf3\"]");
By titleChild = By.xpath("//*[@id=\"title3\"]");
By continueButton = By.xpath("//*[@id=\"traveller-details-block\"]/div/div[2]/button");
By moreService = By.className("ytfi-ssr");
By addMeals = By.xpath("//*[@id=\"ssr-panel\"]/div[1]/div/div[1]/ul/li[2]");
By vegMeals = By.xpath("//*[@id=\"ssr-panel\"]/div[1]/div/div[4]/div[2]/div[1]/div[1]/div[3]/span[2]/button");
By mealAdult1 = By.xpath("//*[@id=\"paxToolBox\"]/ul[2]/li[2]/span[1]/i");
By mealAdult2 = By.xpath("//*[@id=\"paxToolBox\"]/ul[2]/li[3]/span[1]/i");
By coupons = By.xpath("//*[@id=\"promocodeContainer\"]/div/div/ul/li[1]/label/span[1]/i");

public void fillingDetails(String email, String phoneno, String adult1Name, String adult2Name, String adult3Name, String childName) throws Exception {

    Actions action = new Actions(driver);
    driver.findElement(emailId).sendKeys(email);
    driver.findElement(phone).sendKeys(phoneno);

    WebElement dropdown1 = driver.findElement(titleAdult1);
    Select select1 = new Select(dropdown1);
    select1.selectByVisibleText("Mr");

    driver.findElement(adult1).sendKeys(adult1Name);

    WebElement dropdown2 = driver.findElement(titleAdult2);
    Select select2 = new Select(dropdown2);
    select2.selectByVisibleText("Mr");

    driver.findElement(adult2).sendKeys(adult2Name);

    WebElement dropdown3 = driver.findElement(titleAdult3);
    Select select3 = new Select(dropdown3);
    select3.selectByVisibleText("Mrs");

    driver.findElement(adult3).sendKeys(adult3Name);

    WebElement dropdown4 = driver.findElement(titleChild);
    Select select4 = new Select(dropdown4);
    select4.selectByVisibleText("Master");

    driver.findElement(child).sendKeys(childName);

    if (driver.findElement(continueButton).isEnabled()) {
        driver.findElement(continueButton).click();
        logger.info("Continue button is enabled and clicked.");
    } else {
        logger.info("Continue button is not enabled.");
    }

    if (driver.findElement(moreService).isEnabled()) {
        driver.findElement(moreService).click();
        logger.info("MoreService button is enabled and clicked.");
    } else {
        logger.info("MoreService button is not enabled.");
    }

    if (driver.findElement(addMeals).isEnabled()) {
        driver.findElement(addMeals).click();
        logger.info("AddMeals button is enabled and clicked.");
    } else {
        logger.info("AddMeals button is not enabled.");
    }

    if (driver.findElement(vegMeals).isEnabled()) {
        driver.findElement(vegMeals).click();
        logger.info("VegMeals button is enabled and clicked.");
    } else {
        logger.info("VegMeals button is not enabled.");
    }

    if (driver.findElement(mealAdult1).isEnabled()) {
        driver.findElement(mealAdult1).click();
        logger.info("MealAdult1 button is enabled and clicked.");
    } else {
        logger.info("MealAdult1 button is not enabled.");
    }

    if (driver.findElement(mealAdult2).isEnabled()) {
        driver.findElement(mealAdult2).click();
        logger.info("MealAdult2 button is enabled and clicked.");
    } else {
        logger.info("MealAdult2 button is not enabled.");
    }

    if (driver.findElement(coupons).isEnabled()) {
        driver.findElement(coupons).click();
        logger.info("Coupons button is enabled and clicked.");
    } else {
        logger.info("Coupons button is not enabled.");
    }
}
}
	