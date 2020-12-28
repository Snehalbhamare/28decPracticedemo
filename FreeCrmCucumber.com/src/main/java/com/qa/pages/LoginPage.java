package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class LoginPage extends TestBase

{

  @FindBy(name="email")
  WebElement username;
  
  @FindBy(name="password")
  WebElement Password;
  
  @FindBy(xpath="//*[@class='ui fluid large blue submit button']") 
  WebElement loginbtn;
  
  @FindBy(xpath="//button[contains(text(),'sign up')]")
  WebElement signUpBtn;
  
  
  @FindBy(xpath="//img[contains(@class,'img-responsive')]")
  WebElement CrmLogin;

  public LoginPage()
  {
	  PageFactory.initElements(driver,this);
  }
  public String validateLoginPageTitle()
  {
	  return driver.getTitle();
  }
  public boolean validateCRMImage()
  {
	  return CrmLogin.isDisplayed();
  }
public HomePage login(String un,String Pass)
{
	username.sendKeys(un);
	Password.sendKeys(Pass);
	
	//JavascriptExecutor js = (JavascriptExecutor)driver;
	//js.executeScript("argument[0].click();",loginbtn);
	

	loginbtn.click();
					//login.click();
	
	return new HomePage();
}
}
