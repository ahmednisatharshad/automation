package com.htc.redbus.Testmain;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.gen5.api.DisplayName;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.WebDriver;

import com.htc.redbus.driver.DriverFactory;
import com.htc.redbus.junittest.Testpages;
import com.htc.redbus.util.PropertyReader;

public class TestMain {
    private static final Logger logger = LogManager.getLogger(TestMain.class);
    private WebDriver driver;
    private Testpages testPage;

    @BeforeEach
    public void setup() throws Exception {
        testPage = new Testpages(driver);
        testPage.setup();
    }

    @DisplayName("Access Data from Excel")
    @ParameterizedTest(name = "Test with data:email:{0} and phoneno:{1} and adult1:{2} and adult2:{3} and adult3:{4} and child:{5}")
    @MethodSource("com.htc.redbus.excelutil.ReadMultipleExcel#getStream")
    public void runTest(String email,String phoneno,String adult1, String adult2, String adult3, String child) throws Exception {
        testPage.flightBookingpage1();
        testPage.flightBookingpage2();
        testPage.flightBookingpage3(email,phoneno,adult1,adult2,adult3,child);
    }
    @AfterEach
    public void teardown() throws Exception {
        if (driver != null) {
            driver.close();
        }
    }
}