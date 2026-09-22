package com.htc.pagefactory.dbutil;


import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Database {

	   Connection connection;
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
	
	public String[] getDataFromDataBase() {
		String return_value[] = new String[2];
     try {
        String query = "select username,password from playground";
    	 //String query = " select * from playground";
         statement = connection.createStatement();
         rs = statement.executeQuery(query);

         while(rs.next()){
         
             String uname= rs.getString("username");
             String pwd= rs.getString("password");
             System.out.println(uname+"\t"+pwd+"\t");
             return_value[0] = uname;
             return_value[1] = pwd;
             
         }
     } catch (SQLException ex) {
        ex.printStackTrace();
     }
		return return_value;
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