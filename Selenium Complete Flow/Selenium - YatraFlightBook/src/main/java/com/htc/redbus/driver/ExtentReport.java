package com.htc.redbus.driver;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

public class ExtentReport {
    private static ExtentTest test; 
    private static ExtentReports extent; 
    private static String filename = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()); // Timestamp for unique file naming

    // Method to initialize the report and set its location
    public static ExtentReports reportInformation() {
        if (extent == null) { // Check if ExtentReports instance is not already initialized
            // Define the file path for the report with a timestamp
            String path = System.getProperty("user.dir") + "/reports/Yatra Flight Test Report" + filename + ".html";
            ExtentSparkReporter sparkReporter = new ExtentSparkReporter(path); // Create SparkReporter for HTML report
            extent = new ExtentReports(); // Initialize ExtentReports
            extent.attachReporter(sparkReporter); // Attach the SparkReporter to ExtentReports
        }
        return extent; // Return the ExtentReports instance
    }

    // Method to create a test in the report
    public static ExtentTest testInfo(String testName) {
        test = extent.createTest(testName); // Add a new test to the report
        return test; 
    }

    // Method to capture a screenshot and return its file path
    public static String capture(WebDriver driver) throws IOException {
        // Generate a timestamp for unique screenshot naming
        String dateName = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE); 
        // Define the destination path for the screenshot
        String destination = System.getProperty("user.dir") + "/TestsScreenshots/myscreenshot" + dateName + ".png";
        File finalDestination = new File(destination); // Create a File object for the destination
        FileUtils.copyFile(source, finalDestination); // Copy the screenshot to the destination
        return destination; 
    }
}