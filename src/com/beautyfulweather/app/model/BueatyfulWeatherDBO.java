package com.beautyfulweather.app.model;

import java.util.ArrayList;
import java.util.List;

import com.beautyfulweather.app.db.BeautyfulWeatherdb;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

//��һЩ���õ����ݿ������װ����
public class BueatyfulWeatherDBO{
  //���ݿ���
	public static final String DB_NAME="beautyfull_weather";
  //���ݿ�汾
	public static final int VERSION = 1;

	private static BueatyfulWeatherDBO bueatyfulWeatherDBO ;

	private SQLiteDatabase db;
	
	private  BueatyfulWeatherDBO(Context context){
		BeautyfulWeatherdb dbHelper=new BeautyfulWeatherdb(context,DB_NAME, null, VERSION);
		db=dbHelper.getWritableDatabase();
	}
		//  ��ȡCoolWeatherDB��ʵ����
	 public synchronized static BueatyfulWeatherDBO getInstance(Context context){
		 if(bueatyfulWeatherDBO==null){
			 bueatyfulWeatherDBO=new BueatyfulWeatherDBO(context);
		 }
		return bueatyfulWeatherDBO;
	 }
		//��Provinceʵ���洢�����ݿ�
		public void	saveProvince(Province province){
			if(province !=null){
				ContentValues values=new ContentValues();
				values.put("province_name",province.getProvinceName());
				values.put("province_code",province.getProvinceCode());
				db.insert("Province", null, values);
				
			}
		}
		//�����ݿ��ȡȫ�����е�ʡ����Ϣ
			public List<Province> loadProvinces(){
				List<Province> list=new ArrayList<Province>();
				//���cursor��ʵ��
					Cursor cursor=db.query("Province", null, null,null, null, null, null); 
				if(cursor.moveToFirst()){
					do{
						Province province=new Province();
						province.setId(cursor.getInt(cursor.getColumnIndex("id")));
						province.setProvinceName(cursor.getString(cursor.getColumnIndex("province_name")));
						province.setProvinceCode(cursor.getString(cursor.getColumnIndex("province_code")));
                   list.add(province);
					}while(cursor.moveToNext());
						
					}
				return list;
				}
			/**
			 * ��Cityʵ���洢�����ݿ⡣
			 */
			public void saveCity(City city) {
				if (city != null) {
					ContentValues values = new ContentValues();
					values.put("city_name", city.getCityName());
					values.put("city_code", city.getCityCode());
					values.put("province_id", city.getProvinceId());
					db.insert("City", null, values);
				}
			}

			/**
			 * �����ݿ��ȡĳʡ�����еĳ�����Ϣ��
			 */
			public List<City> loadCities(int provinceId) {
				List<City> list = new ArrayList<City>();
				Cursor cursor = db.query("City", null, "province_id = ?",
						new String[] { String.valueOf(provinceId) }, null, null, null);
				if (cursor.moveToFirst()) {
					do {
						City city = new City();
						city.setId(cursor.getInt(cursor.getColumnIndex("id")));
						city.setCityName(cursor.getString(cursor
								.getColumnIndex("city_name")));
						city.setCityCode(cursor.getString(cursor
								.getColumnIndex("city_code")));
						city.setProvinceId(provinceId);
						list.add(city);
					} while (cursor.moveToNext());
				}
				return list;
		
}
			//�����ݿ��ȡĳ���������е�����Ϣ��
			public List<County>loadCounties(int cityId){
				List<County> list=new ArrayList<County>();
				Cursor cursor=db.query("County", null, "city_id=?",new String[]{String.valueOf(cityId)},null,null,null);
			if(cursor.moveToFirst()){
				
				do{
					County county=new County();
					county.setId(cursor.getInt(cursor.getColumnIndex("id")));
					county.setCountyName(cursor.getString(cursor.getColumnIndex("id")));
					county.setCountyCode(cursor.getString(cursor
							.getColumnIndex("county_code")));
					county.setCityId(cityId);
				}while(cursor.moveToNext());
			}	
				return list;
						
			}
}
