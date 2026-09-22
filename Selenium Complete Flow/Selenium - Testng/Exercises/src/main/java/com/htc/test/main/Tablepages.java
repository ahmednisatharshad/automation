package com.htc.test.main;

//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import com.htc.selenium.DriverFactory;
//import com.htc.util.PropertyReader;
//import java.util.List;
//
//import com.htc.selenium.DriverFactory;
//import com.htc.util.PropertyReader;
//
//public class Tablepages {
//public static void main(String[] args) throws Exception {
//	
//	WebDriver driver;
//	driver = DriverFactory.genDriver(PropertyReader.get_broswer());
//	driver.get(PropertyReader.gettablepages());
//	
//	List<WebElement> pages = driver.findElements(By.cssSelector("tablepress-demo-premium"));
//	//System.out.println("The number of pages: " + pages.size());
//
//	for (int  = 0; p < pages.size(); p++) {
//		
//		if (p > 0) {
//			pages.get(p).click();
//			Thread.sleep(2000);
//		}
//
//		Object rows = table.findElements(By.xpath(".//tbody/tr"));
//		for (WebElement row : rows) {
//			List<WebElement> tds = row.findElements(By.tagName("td"));
//			for (int j = 0; j < tds.size() - 1; j++) {
//				System.out.print(tds.get(j).getText() + " | ");
//			}
//			System.out.println();
//
//}
//}}}