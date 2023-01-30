package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Order;
import com.example.exceptionhandling.OrdersException;
import com.example.service.OrderServiceImpl;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/orders")

public class OrderController {

	
    @Autowired

    private OrderServiceImpl orderServiceImpl;
    
	
   
    
    @RequestMapping(value = "/add", method = RequestMethod.POST)         //working    
    public Order saveorder(@RequestBody Order orders) throws OrdersException{

        return orderServiceImpl.addOrder(orders);

    }
     
    @RequestMapping(value = "/view/{orderId}", method = RequestMethod.GET)     //working
    public Order viewbyorderid(@PathVariable Integer orderId) throws OrdersException{

        return orderServiceImpl.viewOrder(orderId);
    }  
    
    
    @RequestMapping(value = "/viewallbyuserid/{id}", method = RequestMethod.GET)     //working
	public List<Order> getordersbyuserid(@PathVariable Integer id) throws OrdersException{

		return orderServiceImpl.vieworderbyuserid(id);
	}
    

    @RequestMapping(value = "/viewallbyrestroid/{restaurantId}", method = RequestMethod.GET)     //working
	public List<Order> getordersbyrestroid(@PathVariable Integer restaurantId) throws OrdersException{

		return orderServiceImpl.vieworderbyrestroid(restaurantId);
	}
    
    
    @PutMapping("/changestatus/{orderId}/status")                                      //working
    public ResponseEntity<Void> updateOrderStatus(@PathVariable Integer orderId, @RequestBody String orderStatus) throws OrdersException{
    	orderServiceImpl.updateOrderStatus(orderId, orderStatus);
        return ResponseEntity.ok().build();
    }
    
    
	@RequestMapping(value = "/viewall", method = RequestMethod.GET)     //working
	public List<Order> getAllOrders() throws OrdersException{

		return orderServiceImpl.viewAllOrders();
	}
	
}
