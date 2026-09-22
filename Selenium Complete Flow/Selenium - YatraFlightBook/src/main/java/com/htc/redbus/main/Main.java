package com.htc.redbus.main;


import org.openqa.selenium.WebDriver;

import com.htc.redbus.driver.DriverFactory;
import com.htc.redbus.pages.Booking;
import com.htc.redbus.pages.Homepage;
import com.htc.redbus.pages.UserDetails;
import com.htc.redbus.util.PropertyReader;

//created this class for just checking pageflow before implementing junit
public class Main {

	public static void main(String[] args) throws Exception {
		WebDriver driver = DriverFactory.genDriver(PropertyReader.getbrowser());
		driver.get(PropertyReader.getwebsite());
		
		Homepage Home = new Homepage(driver);
		Booking Flight = new Booking(driver);
		UserDetails Info = new UserDetails(driver);
		
		Home.searchFlight();
		Flight.bookingFlight();
//		Info.fillingDetails(email, phoneno, adult1, adult2, adult3, child);
	}}