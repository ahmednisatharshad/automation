package com.htc.redbus.junittest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import com.htc.redbus.driver.DriverFactory;
import com.htc.redbus.pages.Booking;
import com.htc.redbus.pages.Homepage;
import com.htc.redbus.pages.UserDetails;
import com.htc.redbus.util.PropertyReader;

public class Testpages {
    private WebDriver driver;

    public Testpages(WebDriver driver) {
        this.driver = driver;
    }
    public void setup() throws Exception {
        this.driver = DriverFactory.genDriver(PropertyReader.getbrowser());
        driver.get(PropertyReader.getwebsite());
    }
    public void flightBookingpage1() throws Exception {
        Homepage home = new Homepage(driver);
        home.searchFlight();
    }
    public void flightBookingpage2() throws Exception {
        Booking plane = new Booking(driver);
        plane.bookingFlight();
    }
    public void flightBookingpage3(String email,String phoneno,String adult1, String adult2, String adult3, String child) throws Exception {
        UserDetails info = new UserDetails(driver);
        info.fillingDetails(email, phoneno, adult1, adult2, adult3, child);
    }
}