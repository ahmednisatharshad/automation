package com.htc.pom.pages;

import java.time.Duration;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CartPlayground {
	private static Logger logger = LogManager.getLogger(CartPlayground.class);

	WebDriver driver;

	public CartPlayground(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	}
 By Home = By.xpath("//*[@id=\"widget-navbar-217834\"]/ul/li[1]/a/div/span");
 
 By Searchclick = By.xpath("//*[@id=\"search\"]/div[2]/button");
 By Search1 = By.xpath("//*[@id=\"search\"]/div[1]/div[1]/div[2]/input");
 By Product01 = By.xpath("//*[@id=\"mz-product-grid-image-28-212469\"]/div/div[1]/img");
 By Product02 = By.xpath("//*[@id=\"mz-product-grid-image-34-212469\"]/div/div[1]/img");
 By Product1 = By.xpath("//*[@id=\"entry_212469\"]/div/div[1]/div/div[1]/div[2]/button[1]");
 By Search2 = By.xpath("//*[@id=\"search\"]/div[1]/div[1]/div[2]/input");
 By Product2 = By.xpath("//*[@id=\"entry_212469\"]/div/div[1]/div/div[1]/div[2]/button[1]");
 By Viewcart = By.xpath("//*[@id=\"notification-box-top\"]/div/div[2]/div[2]/div[1]/a");
 By checkout = By.xpath("//*[@id=\"content\"]/div[2]/a[2]");
//By checkoutconfirm = By.xpath("//*[@id=\"content\"]/div[2]/a[2]//*[@id=\"content\"]/div[2]/a[2]");
// String validtxt = ((WebElement) checkoutconfirm).getText();
 public void GoHome() throws Exception {

//		if (driver.findElement(addToCardElement).isEnabled()) {
//			logger.info("AddtocartElement is enabled");
			driver.findElement(Home).click();
			Thread.sleep(2000);}

public void addCartDetails() throws Exception{
	Actions action = new Actions(driver);
			driver.findElement(Search1).sendKeys("HTC");
			driver.findElement(Searchclick).click();
			
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
			wait.until(ExpectedConditions.titleContains("Search - HTC"));
			WebElement mousehover1 = driver.findElement(Product01);
	    	if(mousehover1.isDisplayed()) {
	    		action.moveToElement(mousehover1).perform();
	    		driver.findElement(Product1).click();
	    	}
	    	driver.findElement(Search2).clear();
			driver.findElement(Search2).sendKeys("apple");
			driver.findElement(Searchclick).click();
			WebElement mousehover2 = driver.findElement(Product02);
	    	if(mousehover2.isDisplayed()) {
	    		action.moveToElement(mousehover2).perform();
	    		driver.findElement(Product2).click();
	    		Thread.sleep(2000);
	    	}}
public void viewcart() throws Exception{
	WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
	wait.until(ExpectedConditions.titleContains("Search - apple"));
			driver.findElement(Viewcart).click();
}
public void checkout() throws Exception{
			driver.findElement(checkout).click();

			 logger.info("Checked out successfully");
			Thread.sleep(3000);
	}
 
}
