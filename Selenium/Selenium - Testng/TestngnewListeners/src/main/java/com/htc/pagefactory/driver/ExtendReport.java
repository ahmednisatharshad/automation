package com.htc.pagefactory.driver;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;


public  class ExtendReport {
	private static ExtentTest test;
	private static ExtentReports extent;
	private static String filename = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
	public static ExtentReports reportInformation() {
		if (extent == null) {
		String path= System.getProperty("user.dir")+"/reports/Shopping Cart Test Report"+filename+".html";
		extent=new ExtentReports(path,false);
	}
	return extent;
}
	public static ExtentTest testInfo(String testName) {
		test= extent.startTest(testName);
		return test;	
	}
	public static String capture(WebDriver driver) throws IOException {
		String dateName = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
		TakesScreenshot ts = (TakesScreenshot) driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		String destination = System.getProperty("user.dir") + "/TestsScreenshots/myscreenshot" + dateName + ".png";
		File finalDestination = new File(destination);
		FileUtils.copyFile(source, finalDestination);
		return destination;
	}
}