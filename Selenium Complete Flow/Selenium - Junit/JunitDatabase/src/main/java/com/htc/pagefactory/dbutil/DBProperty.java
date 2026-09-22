package com.htc.pagefactory.dbutil;

import java.io.FileInputStream;
import java.util.Properties;

public class DBProperty {

	public static Properties getPropertiesObject() throws Exception {

		FileInputStream fileInput = new FileInputStream("DB.Properties");

		Properties propertiesObject = new Properties();

		propertiesObject.load(fileInput);

		return propertiesObject;
	}

	public static String driver() throws Exception {

		return getPropertiesObject().getProperty("drivername");

	}

	public static String databaseURL() throws Exception {

		return getPropertiesObject().getProperty("Url");

	}

	public static String user() throws Exception {
		return getPropertiesObject().getProperty("username");
	}

	public static String password() throws Exception {
		return getPropertiesObject().getProperty("password");
	}

}
