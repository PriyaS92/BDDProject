package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import cucumber.api.java.en.Given;

public class Login {
	
	public static WebDriver driver;
	
	@Given("^I launch IE browser with \"([^\"]*)\"$")
	public void i_launch_IE_browser_with(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new PendingException();
		System.setProperty("webdriver.ie.driver","C:\\Users\\ps14\\Documents\\Confidential\\LeanFTWorkspace\\IEDriverServer.exe");
		DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
		capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true);
		driver = new InternetExplorerDriver(capabilities);
		driver.manage().window().maximize();
		driver.navigate().to(url);
		TimeUnit.MINUTES.sleep(2);
	}
	}
