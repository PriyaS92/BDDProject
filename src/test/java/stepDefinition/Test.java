package stepDefinition;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.When;

public class Test{
	@FindBy(id="ctl00_mainSeachControl_ctl00_csr_sbox")
	WebElement searchbox;
	
	public Test()
	{
		PageFactory.initElements(Login.driver, this);
	}
	
	@When("^user enter the text in textbox with \"([^\"]*)\"$")
	public void user_enter_the_text_in_textbox_with(String search) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new PendingException();
	searchbox.sendKeys(search);
	}
}
