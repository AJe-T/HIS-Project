package com.min42.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/state")
public class SsnController 
{
	@GetMapping("/{number}")
	public String getLocation(@PathVariable Long number)
	{
		String numberString=String.valueOf(number);
		
		if(numberString.startsWith(AppConstrant.ZERO))
		{
			return AppConstrant.VERMONT;
		}
		else if(numberString.startsWith(AppConstrant.ONE))
		{
			return AppConstrant.NEW_JERSEY;
		}
		else if(numberString.startsWith(AppConstrant.TWO))
		{
			return AppConstrant.OHIO;
		}
		else if(numberString.startsWith(AppConstrant.THREE))
		{
			return AppConstrant.MICHIGAN;
		}
		else if(numberString.startsWith(AppConstrant.FOUR))
		{
			return AppConstrant.TEXAS;
		}
		else if(numberString.startsWith(AppConstrant.FIVE))
		{
			return AppConstrant.WASHINGTON;
		}
		else if(numberString.startsWith(AppConstrant.SIX))
		{
			return AppConstrant.ARIZONA;
		}
		else if(numberString.startsWith(AppConstrant.SEAVEN))
		{
			return AppConstrant.RAILROAD_RETIREMENT;
		}
		return AppConstrant.INVALID_SSN;
	}
}
