package com.qa.stepDefenition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;
import com.sun.org.apache.xpath.internal.XPath;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class HomePagesteps extends TestBase
{

	LoginPage loginpage;
	HomePage homepage;
	
@Given("^user opens browser$")
public void user_opens_browser() throws Throwable {
  TestBase.initialization();
}

@Then("^user is on login page$")
public void user_is_on_login_page() throws Throwable {
	loginpage=new LoginPage();
   String title=  loginpage.validateLoginPageTitle();
 Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);   
}

@When("^user clicks on login btn$")
public void user_clicks_on_login_btn()throws Throwable{
	WebElement ele= driver.findElement(By.xpath("//*[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']"));
	ele.click();
	
	//homepage.loginclick1();
   
   
}


@Then("^user logs into apps$")
public void user_logs_into_apps() throws Throwable {
    homepage= loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
}


@Then("^validate home page page title$")
public void validate_home_page_page_title() throws Throwable {
	String hometitle=homepage.verifyHomePageTitle();
	Assert.assertEquals("Cogmento CRM", hometitle); 
}

 



  
 // homepage.verifyCorrectUsername();
  


	
}
