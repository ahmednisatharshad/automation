package com.htc.test.main;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;
import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;
    	public class Webtables {
    		private static Logger logger = LogManager.getLogger(Webtables.class);

    		public static void main(String[] args) throws Exception {
    			WebDriver driver;
    			driver = DriverFactory.genDriver(PropertyReader.get_broswer());
    			driver.get(PropertyReader.getwebtable());
    			WebElement table = driver.findElement(By.id("tablepress-demo-premium"));
    			List<WebElement> cols = driver.findElements(By.xpath("//*[@id=\"tablepress-demo-premium_wrapper\"]/div[3]/div/div/div[1]/div/table/thead/tr[1]/th/span[1]"));
    			List<WebElement> rows = driver.findElements(By.xpath(".//tbody/tr"));
    			logger.info(cols.size());
    			logger.info(rows.size());
    			List<WebElement> pages = driver.findElements(By.className("dt-paging-button"));
    			logger.info("The number of pages:"+pages.size());
    			for(int p = 0; p < pages.size(); p++) {
    				if(p > 0) {
    					WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    					WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.className("dt-paging-button")));
    					element.click();

    				}
    				rows = table.findElements(By.xpath(".//tbody/tr"));
    				for(WebElement row : rows) {
    					List<WebElement> tds = row.findElements(By.tagName("td"));
    					for(int j = 0; j < tds.size() - 1; j++) {
    						System.out.print(tds.get(j).getText()+" | ");
    					}
    					System.out.println();
    				}
    			}
    			Thread.sleep(3000);
    			driver.close();
    		}

    	}
