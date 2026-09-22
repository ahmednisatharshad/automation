package com.htc.redbus.pages;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.htc.redbus.driver.ExtentReport;


public class ReportBase {
	static ExtentReports extent = ExtentReport.reportInformation();
	static ExtentTest test = ExtentReport.testInfo("Yatra Flight Test Report");
}
