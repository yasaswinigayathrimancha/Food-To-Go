package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.MenuItem;
import com.example.entity.Restaurant;
import com.example.exceptionhandling.MenuItemException;
import com.example.exceptionhandling.RestaurantException;
import com.example.service.MenuItemServiceImpl;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/items")
public class MenuItemController {

	@Autowired
	private MenuItemServiceImpl menuItemServiceImpl;
	
	
    
	@PostMapping("/add") //working
	public MenuItem addItem(@RequestBody MenuItem menuitem) throws MenuItemException  {
		
		return menuItemServiceImpl.addItem(menuitem);
		
	}


	@GetMapping("/view/{id}") //working
	public MenuItem getItem(@PathVariable Integer id) throws MenuItemException {

		return menuItemServiceImpl.viewItem(id);
	}
	
	
	

	@GetMapping("/viewall")     //working
	public List<MenuItem> getAllItems() throws MenuItemException {

		return menuItemServiceImpl.viewAllItems();
	}
	
	
	
	
	@DeleteMapping("/delete/{id}")
	  public void deleteItem(@PathVariable Integer id ) throws MenuItemException {                  //working
		     
		menuItemServiceImpl.deleteItem(id);
		  
	  }
	
	
	
	
	@GetMapping("/{name}")        //working
    public List<MenuItem> findItem(@PathVariable("name") String name) throws MenuItemException {
		List<MenuItem> menuitem = menuItemServiceImpl.searchItemByName(name);
		if (menuitem == null) {
			throw new MenuItemException("No item found with name: " + name);
		}
		return menuitem;
    }
	
	
	
	
	@GetMapping("/viewallbyrestroid/{restaurantId}")     //working
	public List<MenuItem> getItemsbyrestroid(@PathVariable Integer restaurantId) throws MenuItemException {

		return menuItemServiceImpl.viewItemsbyRestroid(restaurantId);
	}
	
	
	
	
	@PutMapping("/update/{id}")                                                       //working
    public ResponseEntity<MenuItem> updateMenuItem(@PathVariable Integer id, @RequestBody MenuItem menuItem) throws MenuItemException {
        MenuItem updatedMenuItem = menuItemServiceImpl.updateMenuItem(id, menuItem);
        return new ResponseEntity<>(updatedMenuItem, HttpStatus.OK);
    }
	
	
}
