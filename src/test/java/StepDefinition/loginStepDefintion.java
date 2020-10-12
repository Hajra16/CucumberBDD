package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginStepDefintion {
	WebDriver driver; 
	@Before({"@positive,@negative"})
	public void setup() {
		
		 System.setProperty("webdriver.chrome.driver", "C:\\Users\\Hajra\\eclipse-workspace\\cucumberBDD\\chromedriver.exe");
		 driver = new ChromeDriver();
		
		 driver.manage().window().maximize();
		 driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
			
	}
	

	@Given("^user open browser$")
	public void user_open_browser() throws Throwable {
		driver.get("https://ui.freecrm.com/");
	}

	@Then("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
		WebElement button = driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/div[2]/a"));
	boolean btn = button.isDisplayed();
	Assert.assertTrue(btn);
	
	}

	@Then("^user enter email and password$")
	public void user_enter_email_and_password() throws Throwable {
		driver.findElement(By.name("email")).sendKeys("qstestone@gmail.com");
		driver.findElement(By.name("password")).sendKeys("pakistan1");
	}


	@Then("^user click on submit button$")
	public void user_click_on_submit_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();
	}
	
	@Then("^user lands on home page$")
	public void user_lands_on_home_page() throws Throwable {
	String actualtitle = driver.getTitle();
	String expectedtitle = "Cogmento";
	Assert.assertEquals(actualtitle, expectedtitle,"your title does not match");
	
	}
	

	@Then("^user is on the login page$")
	public void user_is_on_the_login_page() throws Throwable {
		WebElement button = driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/div[2]/a"));
	boolean btn = button.isDisplayed();
	Assert.assertTrue(btn);

	}

	@Then("^user enters the email and password$")
	public void user_enters_the_email_and_password() throws Throwable {
		driver.findElement(By.name("email")).sendKeys("qtestone@gmail.com");
		driver.findElement(By.name("password")).sendKeys("pakistan");
	}

	@Then("^user clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"ui\"]/div/div/form/div/div[3]")).click();

	}

	@Then("^user lands on the home page$")
	public void user_lands_on_the_home_page() throws Throwable {
		WebElement button = driver.findElement(By.xpath("//*[@id=\"top-header-menu\"]/div[3]/span[1]"));
	boolean btn = button.isDisplayed();
	Assert.assertTrue(btn);

	}

}
