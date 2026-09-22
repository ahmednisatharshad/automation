package com.htc.test.main;


import java.time.Duration;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;

public class Bootstrap {

	private static Logger logger = LogManager.getLogger(Bootstrap.class);
	public static void main(String[] args) throws Exception {

		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());
		driver.get(PropertyReader.getbootstrap());

		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3000));
		
		WebElement dropdown = driver.findElement(By.xpath("//*[@id=\"billing_country_field\"]/span/span/span[1]/span"));

		if (dropdown.isEnabled()) {
			logger.info("Drop down is enabled");
			dropdown.click();
		}

		else {
			logger.info("drop down is not enabled");
		}

		WebElement search = driver.findElement(By.className("select2-search__field"));
		if (search.isEnabled()) {
			logger.info("search input is enabled");
			search.sendKeys("It");
		}

		else {
			logger.warn("Search input is not enabled");
		}

		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3000));
		List<WebElement> auto = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//ul[@id='select2-billing_country-results']/li")));

		if (auto.isEmpty()) {
			logger.warn("No suggestions are displayed");
		}

		else {
			logger.info("Auto Suggestions count:" + auto.size());
		}

		for (WebElement a : auto) {
			logger.info("Values are =" + a.getText());
			if (a.getText().equals("Italy")) {
				a.click();
				logger.info("Italy is clicked");
				Thread.sleep(3000);
				break;
			}
		}
		Thread.sleep(3000);
		driver.close();
	}
}