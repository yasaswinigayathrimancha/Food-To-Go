package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Restaurant;
import com.example.exceptionhandling.RestaurantException;
import com.example.repository.RestaurantRepository;


@Service
public class RestaurantServiceImpl implements RestaurantService {
	
	@Autowired
	private RestaurantRepository restaurantRepository;
	
	
	
	@Override
    public Restaurant viewRestaurant(Integer restaurantId) throws RestaurantException {
        if (restaurantId <= 0) {
            throw new RestaurantException("Invalid restaurantId, must be greater than 0");
        }
        Optional<Restaurant> restaurant = restaurantRepository.findById(restaurantId);
        if (!restaurant.isPresent()) {
            throw new RestaurantException("No restaurant found with id " + restaurantId);
        }
        return restaurant.get();
    }

    @Override
    public Restaurant searchRestaurantByName(String restaurantName) throws RestaurantException {
        if (restaurantName == null || restaurantName.trim().length() == 0) {
            throw new RestaurantException("Invalid restaurantName, cannot be null or empty");
        }
        Restaurant restaurant = restaurantRepository.getByName(restaurantName);
        if (restaurant == null) {
            throw new RestaurantException("No restaurant found with name " + restaurantName);
        }
        return restaurant;
    }

	@Override
	public List<Restaurant> viewAllRestaurants() throws RestaurantException{
        return restaurantRepository.findAll();
	}
   
   
	
}