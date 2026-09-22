package com.htc.util;

import java.io.FileInputStream;
import java.util.Properties;

public class PropertyReader {
	
	
	public static Properties getPropertiesObject() throws Exception {

		FileInputStream fileInput = new FileInputStream("environmental.properties");
		Properties propertiesObject = new Properties();
		propertiesObject.load(fileInput);
		return propertiesObject;
	}
	public static String gettesturl() throws Exception {
		return getPropertiesObject().getProperty("loginURL");
	}
	public static String gettablepages() throws Exception {
		return getPropertiesObject().getProperty("Tablepages");
	}
	public static String getUrl() throws Exception {
		return getPropertiesObject().getProperty("testURL");
	}
	public static String getmousehover() throws Exception {
		return getPropertiesObject().getProperty("Mousehover");
	}
	public static String getrightclick() throws Exception {
		return getPropertiesObject().getProperty("RightClick");
	}
	public static String getdoubleclick() throws Exception {
		return getPropertiesObject().getProperty("DoubleClick");
	}
	public static String getscroll() throws Exception {
		return getPropertiesObject().getProperty("scrollandview");
	}
	public static String getdrag() throws Exception {
		return getPropertiesObject().getProperty("dragdrop");
	}
	public static String get_broswer() throws Exception {
		return getPropertiesObject().getProperty("browserName");
	}

	public static String getUserName() throws Exception {
		return getPropertiesObject().getProperty("userName");
	}

	public static String getPassword() throws Exception {
		return getPropertiesObject().getProperty("password");
	}
	public static String getwaitPassword() throws Exception {
		return getPropertiesObject().getProperty("waitpassword");
	}
	public static String getwaitUserName() throws Exception {
		return getPropertiesObject().getProperty("waituser");
	}
	public static String getEmail() throws Exception {
		return getPropertiesObject().getProperty("email");
	}
	public static String getAddress() throws Exception {
		return getPropertiesObject().getProperty("address");
	}
	public static String getbootstrap() throws Exception {
		return getPropertiesObject().getProperty("bootstrap");
	}
	public static String getDate() throws Exception {
		return getPropertiesObject().getProperty("date");
	}
	public static String getDateurl() throws Exception {
		return getPropertiesObject().getProperty("dateurl");
	}
	public static String getAlert() throws Exception {
		return getPropertiesObject().getProperty("alert");
	}
	public static String getSfile() throws Exception {
		return getPropertiesObject().getProperty("singlefile");
	}
	public static String getwebtable() throws Exception {
		return getPropertiesObject().getProperty("webtables");
	}
	public static String getMfile() throws Exception {
		return getPropertiesObject().getProperty("multiplefile");
	}
	public static String getdownload() throws Exception {
		return getPropertiesObject().getProperty("download");
	}
	public static String getwindowurl() throws Exception {
		return getPropertiesObject().getProperty("window");
	}
	public static String getAutourl() throws Exception {
		return getPropertiesObject().getProperty("autocompleteurl");
	}
	public static String getAutoURL() throws Exception {
		return getPropertiesObject().getProperty("autoURL");
	}
	public static String getWaitURL() throws Exception {
		return getPropertiesObject().getProperty("waitURL");
	}
	public static String getkeyboardURL() throws Exception {
		return getPropertiesObject().getProperty("keyboardlogin");
	}
	public static String getJSURL() throws Exception {
		return getPropertiesObject().getProperty("JSURL");
	}
	public static String getWndURL() throws Exception {
		return getPropertiesObject().getProperty("wndURL");
	}
	public static String getIncorrectUser() throws Exception {
		return getPropertiesObject().getProperty("Incorrectuser");
	}
	public static String getIncorrectPass() throws Exception {
		return getPropertiesObject().getProperty("Incorrectpass");
	}
	public static String getFrame() throws Exception {
		return getPropertiesObject().getProperty("frames");
	}

	
}
