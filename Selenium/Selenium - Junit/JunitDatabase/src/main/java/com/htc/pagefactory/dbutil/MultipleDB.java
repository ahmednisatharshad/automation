package com.htc.pagefactory.dbutil;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class MultipleDB {

	   static Connection connection;
	   Statement statement;
	   ResultSet rs;
	   
	   
	public void setUp() throws Exception {
     
     connection = null;
     try {
         Class.forName(DBProperty.driver());
         System.out.println("Connecting to Database...");
         connection = DriverManager.getConnection(DBProperty.databaseURL(), DBProperty.user(), DBProperty.password());
         if (connection != null) {
             System.out.println("Connected to the Database...");
         }
     } catch (SQLException ex) {
        ex.printStackTrace();
     }
     catch (ClassNotFoundException ex) {
        ex.printStackTrace();
     }
	}
	
	public static List<String[]> getDataFromDataBase() {
		List<String[]> Database = new ArrayList<>();
		String query = "select username,password from playground1;";
     try( Statement statement = connection.createStatement(); ResultSet rs = statement.executeQuery(query)) {

 			while (rs.next()) {
 				String uname = rs.getString("username");
 				String pwd = rs.getString("password");
 				System.out.println(uname + "\t" + pwd);

 				Database.add(new String[] { uname, pwd });
 			}
 		} catch (SQLException ex) {
 			ex.printStackTrace();
 		}
 		return Database;
 	}
 	
 	static Stream<String[]> dbDataProvider() {
         return getDataFromDataBase().stream(); 
     }

 	public void tearDown() {
 		if (connection != null) {
 			try {
 				System.out.println("Closing Database Connection...");
 				connection.close();
 			} catch (SQLException ex) {
 				ex.printStackTrace();
 			}
 		}
 	}

	
}