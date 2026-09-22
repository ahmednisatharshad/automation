package com.htc.pagefactory.util;

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
	public static String getemail() throws Exception {
		return getPropertiesObject().getProperty("email");
	}
	public static String getpassword() throws Exception {
		return getPropertiesObject().getProperty("password");
	}
}
