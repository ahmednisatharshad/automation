package com.htc.test.main;

import java.time.Duration;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;

public class Autocomplete {

	private static Logger logger = LogManager.getLogger(Autocomplete.class);

	public static void main(String[] args) throws Exception {

		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());
		driver.get(PropertyReader.getAutourl());
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		String title = driver.getTitle();
		System.out.println("Title of the page is: " + title);
		if (title.equals("Wikipedia"))
			logger.info("Navigated to the correct URL");
		else
			logger.warn("Invalid URL");
		driver.findElement(By.id("searchInput")).sendKeys("Delhi");
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		List<WebElement> autoSuggest = wait.until(ExpectedConditions
				.visibilityOfAllElementsLocatedBy(By.xpath("//*[@id='typeahead-suggestions']/div/a/div[1]/h3")));
		if (autoSuggest.isEmpty()) {
			logger.warn("No auto-suggestions found.");
		} else {
			logger.info("Auto-suggestions count: " + autoSuggest.size());
		}
		for (WebElement a : autoSuggest) {
			logger.info("Values are = " + a.getText());
			if (a.getText().equalsIgnoreCase("Delhi Capitals")) {
				((JavascriptExecutor) driver).executeScript("arguments[0].click();", a);
				Thread.sleep(3000);
				break;
			}
		}
		Thread.sleep(3000);
		driver.close();
	}
}