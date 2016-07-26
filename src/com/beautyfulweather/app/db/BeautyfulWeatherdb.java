package com.beautyfulweather.app.db;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteDatabase.CursorFactory;
import android.database.sqlite.SQLiteOpenHelper;

public class BeautyfulWeatherdb extends SQLiteOpenHelper{
	//建立三张数据表 三条建表语句定义成常量
	//Province表
	public static final String CREATE_PROVINCE="create table Province(id integer primary key autoincrement," +
			"province_name text," +
			"province_code text)";
	// City表建表语句
	public static final String CREATE_CITY ="create table City(id integer primary key autoincrement," +
			"City_name text," +
			"City_code text" +
			"City_id integer)";
	public static final String CREATE_COUNTY = "create table County ("
			+ "id integer primary key autoincrement, " 
			+ "county_name text, " 
			+ "county_code text, " 
			+ "city_id integer)";
// County表建表语句
	public BeautyfulWeatherdb(Context context, String name,
			CursorFactory factory, int version) {
		super(context, name, factory, version);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void onCreate(SQLiteDatabase db) {
		// TODO Auto-generated method stub
		//创建数据表
		db.execSQL(CREATE_PROVINCE);
		db.execSQL(CREATE_CITY);
		db.execSQL(CREATE_COUNTY);
	}

	@Override
	public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
		// TODO Auto-generated method stub
		
	}
  
	
}
