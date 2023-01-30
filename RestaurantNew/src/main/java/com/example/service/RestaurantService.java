package com.example.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.entity.Restaurant;
import com.example.exceptionhandling.RestaurantException;

public interface RestaurantService {
   
	  public Restaurant viewRestaurant(Integer restaurantId) throws RestaurantException ;
	
	  public Restaurant searchRestaurantByName(String restaurantName) throws RestaurantException;

		public List<Restaurant> viewAllRestaurants()throws RestaurantException;

	
}
