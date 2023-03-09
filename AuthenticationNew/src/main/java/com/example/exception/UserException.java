package com.example.exception;

public class UserException extends Exception {

	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public UserException() {

	}

	public UserException(String msg) {

		super(msg);
		this.message = msg;
	}
}