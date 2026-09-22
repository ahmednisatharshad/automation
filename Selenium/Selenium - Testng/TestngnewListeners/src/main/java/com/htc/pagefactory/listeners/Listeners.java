
package com.htc.pagefactory.listeners;

import java.io.IOException;
import org.openqa.selenium.WebDriver;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;
import com.htc.pagefactory.driver.DriverFactory;
import com.htc.pagefactory.driver.ExtendReport;
import com.htc.pagefactory.util.PropertyReader;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

public class Listeners implements ITestListener {

	protected static ExtentTest test;
	protected static WebDriver driver;
	protected static ExtentReports extent;

	@Override
	public void onTestStart(ITestResult result) {

		try {
			driver = DriverFactory.genDriver(PropertyReader.getbrowser());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		extent = ExtendReport.reportInformation();
		test = extent.startTest(result.getMethod().getMethodName());

	}

	@Override
	public void onTestSuccess(ITestResult result) {

		test.log(LogStatus.PASS, result.getMethod().getMethodName() + " is successful");
		System.out.println("on test success");

	}

	@Override
	public void onTestFailure(ITestResult result) {

		System.out.println("on test failure");
		test.log(LogStatus.FAIL, result.getMethod().getMethodName() + " is Failed");
		// method to get fail condition in report
		test.log(LogStatus.FAIL, result.getThrowable());

		try {
			test.addScreenCapture(ExtendReport.capture(driver));

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public void onTestSkipped(ITestResult result) {

		System.out.println("on test skip");
		test.log(LogStatus.SKIP, result.getMethod().getMethodName() + "is skipped");

	}

	@Override
	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {

	}

	@Override
	public void onStart(ITestContext context) {
		System.out.println("on start");
	}

	@Override
	public void onFinish(ITestContext context) {
		System.out.println("on finish");
		extent.flush();
		extent.endTest(test);

	}

}
//public class Listeners implements ITestListener {
//
//	WebDriver driver;
//	protected static ExtentReports extent;
//	public static ExtentTest test;
//
//	@Override
//	public void onStart(ITestContext context) {
//		System.out.println("Test Execution Started: " + context.getName());
//		ExtendReport.reportInformation();
//	}
//
//	@Override
//	public void onFinish(ITestContext context) {
//		System.out.println("Test Execution Finished: " + context.getName());
//		extent.flush();
//	}
//
//	@Override
//	public void onTestStart(ITestResult result) {
//		System.out.println("Starting Test: " + result.getName());
//		test = ExtendReport.reportInformation().createTest(result.getName());
//		test.log(Status.INFO, "Test started: " + result.getName());
//	}
//
//	@Override
//	public void onTestSuccess(ITestResult result) {
//		System.out.println("Test Passed: " + result.getName());
//		test.log(Status.PASS, "Test Passed: " + result.getName());
//	}
//
//	@Override
//	public void onTestFailure(ITestResult result) {
//		System.out.println("Test Failed: " + result.getName());
//		test.log(Status.FAIL, "Test Failed: " + result.getThrowable());
//
//		Object testClass = result.getInstance();
//		//driver = ((src.test.javacom.htc.parabanktestng.maintest.BankTest) testClass).driver; // Get driver instance
//
//		try {
//			String screenshotPath = ExtendReport.capture(driver);
//			test.addScreenCaptureFromPath(screenshotPath);
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}
//
//	@Override
//	public void onTestSkipped(ITestResult result) {
//		System.out.println("Test Skipped: " + result.getName());
//		test.log(Status.SKIP, "Test Skipped: " + result.getThrowable());
//	}
//
//	@Override
//	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
//		System.out.println("Test Failed but within success percentage: " + result.getName());
//	}
//}