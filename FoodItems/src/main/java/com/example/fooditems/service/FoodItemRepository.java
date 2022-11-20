package com.example.fooditems.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.fooditems.dao.FoodItem;

@Repository
public interface FoodItemRepository extends JpaRepository<FoodItem, Integer>{
	
	@Query(value="select max(item_number) from legourmet", nativeQuery = true)
	public Integer getItemId();

}
