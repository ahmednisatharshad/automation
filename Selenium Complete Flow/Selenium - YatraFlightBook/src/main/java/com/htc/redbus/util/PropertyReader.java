package com.htc.redbus.util;

import java.io.FileInputStream;
import java.util.Properties;

public class PropertyReader {
	public static Properties getPropertiesObject() throws Exception {

		FileInputStream fileInput = new FileInputStream("environmental.properties");
		Properties propertiesObject = new Properties();
		propertiesObject.load(fileInput);
		return propertiesObject;
	}
	public static String getbrowser() throws Exception {
		return getPropertiesObject().getProperty("browser");
	}
	public static String getwebsite() throws Exception {
		return getPropertiesObject().getProperty("website");
	}
	public static String getgoingdate() throws Exception {
		return getPropertiesObject().getProperty("goingdate");
	}
	public static String getreturndate() throws Exception {
		return getPropertiesObject().getProperty("returndate");
	}
	public static String getemail() throws Exception {
		return getPropertiesObject().getProperty("email");
	}
	public static String getphoneno() throws Exception {
		return getPropertiesObject().getProperty("phone");
	}
	public static String getadult1() throws Exception {
		return getPropertiesObject().getProperty("adult1");
	}
	public static String getadult2() throws Exception {
		return getPropertiesObject().getProperty("adult2");
	}
	public static String getadult3() throws Exception {
		return getPropertiesObject().getProperty("adult3");
	}
	public static String getchild() throws Exception {
		return getPropertiesObject().getProperty("child");
	}
}