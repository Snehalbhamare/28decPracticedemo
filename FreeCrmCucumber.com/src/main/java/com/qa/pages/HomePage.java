package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;



public class HomePage extends TestBase
{
	

 @FindBy(xpath="//*[@class='user-display']")
 //@CacheLookup
 WebElement userNameLabel;    
 
 @FindBy(xpath="//a[contains(text(),'Contacts']")
 WebElement contactsLink;
 
 @FindBy(xpath="//a[contains(text(),'New Contact')]")
	WebElement newContactList;
 
 @FindBy(xpath="//a[contains(text(),'Deals')]")
 WebElement tasksLink;
 
 @FindBy(xpath="//*[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']")
 WebElement loginbtn1;
 
 
  public void Homepage()
 {
	 
	 PageFactory.initElements(driver,this);
 }
	public String verifyHomePageTitle()
	{
		return driver.getTitle();
		
	}
	
	public boolean verifyCorrectUsername()
	{
		return userNameLabel.isDisplayed();
	}
	
	public void clickOnNewContactLink()
	{
		Actions action = new Actions(driver);
		action.moveToElement(contactsLink).build().perform();
		newContactList.click();
	}

	public void loginclick1() {
		loginbtn1.click();	
	}
	public void test()
	{
		System.out.println("newly added method");
	}
}


