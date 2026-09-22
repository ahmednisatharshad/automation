package com.htc.pagefactory.pages;
import java.time.Duration;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CartPlayground {
	private static Logger logger = LogManager.getLogger(CartPlayground.class);

	WebDriver driver;

	public CartPlayground(WebDriver driver) {
		this.driver = driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	}
@FindBy(xpath ="//*[@id=\"widget-navbar-217834\"]/ul/li[1]/a/div/span")
WebElement Home;
@FindBy(xpath ="//*[@id=\"search\"]/div[2]/button")
WebElement Searchclick ;
@FindBy(xpath ="//*[@id=\"search\"]/div[1]/div[1]/div[2]/input")
WebElement Search1 ;
@FindBy(xpath ="//*[@id=\"mz-product-grid-image-28-212469\"]/div/div[1]/img")
WebElement Product01 ;
@FindBy(xpath ="//*[@id=\"mz-product-grid-image-34-212469\"]/div/div[1]/img")
WebElement Product02 ;
@FindBy(xpath ="//*[@id=\"entry_212469\"]/div/div[1]/div/div[1]/div[2]/button[1]")
WebElement Product1 ;
@FindBy(xpath ="//*[@id=\"search\"]/div[1]/div[1]/div[2]/input")
WebElement Search2 ;
@FindBy(xpath ="//*[@id=\"entry_212469\"]/div/div[1]/div/div[1]/div[2]/button[1]")
WebElement Product2 ;
@FindBy(xpath ="//*[@id=\"notification-box-top\"]/div/div[2]/div[2]/div[1]/a")
WebElement Viewcart ;
@FindBy(xpath ="//*[@id=\"content\"]/div[2]/a[2]")
WebElement checkout ;
public void GoHomepage() throws Exception {

//	if (driver.findElement(addToCardElement).isEnabled()) {
//		logger.info("AddtocartElement is enabled");
		Home.click();
//		Thread.sleep(2000);
}

public void addCartDetail() throws Exception{
Actions action = new Actions(driver);
		Search1.sendKeys("HTC");
		Searchclick.click();
		
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
		wait.until(ExpectedConditions.titleContains("Search - HTC"));
		WebElement mousehover1 = Product01;
    	if(mousehover1.isDisplayed()) {
    		action.moveToElement(mousehover1).perform();
    		Product1.click();
    	}
    	Search2.clear();
		Search2.sendKeys("apple");
		Searchclick.click();
		WebElement mousehover2 = Product02;
    	if(mousehover2.isDisplayed()) {
    		action.moveToElement(mousehover2).perform();
    		Product2.click();
    		Thread.sleep(2000);
    	}
    	}
public void viewcarts() throws Exception{
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.titleContains("Search - apple"));
		Viewcart.click();
}
public void Checkout() throws Exception{
		checkout.click();

		 logger.info("Checked out successfully");
		Thread.sleep(3000);
}
}


