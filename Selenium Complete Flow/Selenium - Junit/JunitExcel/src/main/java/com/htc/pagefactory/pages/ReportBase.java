package com.htc.pagefactory.pages;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.htc.pagefactory.driver.ExtendReport;

public class ReportBase {
	static ExtentReports extent = ExtendReport.reportInformation();
	static ExtentTest test = ExtendReport.testInfo("Shopping Cart");
}
