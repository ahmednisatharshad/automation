package com.htc.test.main;

import java.io.File;
import java.time.Duration;
import java.util.NoSuchElementException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.FluentWait;

import com.htc.selenium.DriverFactory;
import com.htc.util.PropertyReader;

public class UploadDownload {
	private static Logger logger = LogManager.getLogger(UploadDownload.class);

	public static void main(String[] args) throws Exception

	{
		WebDriver driver;
		driver = DriverFactory.genDriver(PropertyReader.get_broswer());

		singleFileUpload(driver);

		fileDownload(driver);

		multipleFileUpload(driver);

	}

	private static void singleFileUpload(WebDriver driver) throws Exception {
		driver.get(PropertyReader.getSfile());

		WebElement fileInput = driver.findElement(By.id("file-upload"));
		String filePath = "C:\\Users\\htcuser_1\\Pictures\\dhoni.jpg";
		fileInput.sendKeys(filePath);
		Thread.sleep(2000);
		WebElement firstFileListItem = driver.findElement(By.id("file-submit"));
		firstFileListItem.click();
// logger.info("Uploaded file: " + firstFileListItem.getText()); 
// Thread.sleep(3000);
// ((JavascriptExecutor) driver).executeScript("document.getElementById('file-upload').value = '';"); 
		Thread.sleep(3000);
	}

	private static void fileDownload(WebDriver driver) throws Exception {
		driver.get(PropertyReader.getdownload());
//File Download
		WebElement downloadLink = driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div/ul/li[1]/a"));
		downloadLink.click();

		String downloadedFilePath = "C:\\Users\\htcuser_1\\Downloads\\ui.vision-xmodules-setup-v201905.exe";
		Thread.sleep(7000);
		File file = new File(downloadedFilePath);
		if (file.exists()) {
			logger.info("File downloaded successfully: " + downloadedFilePath);
		} else {
			logger.warn("File download failed");
		}
	}

	private static void multipleFileUpload(WebDriver driver) throws Exception {
		driver.get(PropertyReader.getMfile());

		WebElement fileInput = driver.findElement(By.id("input-4"));
		String filePath1 = "C:\\Users\\htcuser_1\\Pictures\\vijay.jpg";
		String filePath2 = "‪C:\\Users\\htcuser_1\\Pictures\\dhonicsk.jpg";
		fileInput.sendKeys(filePath1 + "\n" + filePath2);
//		WebElement firstFileListItem = driver.findElement(By.cssSelector("#fileList li:nth-child(1)"));
//		WebElement secondFileListItem = driver.findElement(By.cssSelector("#fileList li:nth-child(2)"));
//		System.out.println("Uploaded files: " + firstFileListItem.getText() + ", " + secondFileListItem.getText());
//
		((JavascriptExecutor) driver).executeScript("document.getElementById('filesToUpload').value = '';");
		Thread.sleep(3000);
	}
}
