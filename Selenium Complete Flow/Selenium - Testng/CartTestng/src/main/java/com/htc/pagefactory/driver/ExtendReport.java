package com.htc.pagefactory.driver;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;


public  class ExtendReport {
	private static ExtentTest test;
	private static ExtentReports extent;
	private static String filename = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
	public static ExtentReports reportInformation() {
		if (extent == null) {
		String path= System.getProperty("user.dir")+"/reports/Shopping Cart Test Report"+filename+".html";
		ExtentSparkReporter sparkReporter = new ExtentSparkReporter(path);
		extent=new ExtentReports();
		extent.attachReporter(sparkReporter);
	}
	return extent;
}
	public static ExtentTest testInfo(String testName) {
		test= extent.createTest(testName);
		return test;	
	}
}