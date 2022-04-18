package com.appSmart.tests.stepDefinitions;

import com.appSmart.tests.pages.ShoppingCartPage;
import com.appSmart.tests.utilities.Driver;
import com.appSmart.tests.utilities.MyUtilities;
import com.github.javafaker.Faker;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;

public class OrderStepDefs {
        ShoppingCartPage shoppingCartPage=new ShoppingCartPage();
        Faker faker=new Faker();
        String firstName=faker.name().firstName();
        String lastName=faker.name().lastName();
        String email=firstName+lastName+"@company.de";

    @When("Click on Order now button")
    public void click_on_Order_now_button() {
    shoppingCartPage.orderBtn.click();
        MyUtilities.waitFor(2);
    }


    @When("Fill in the blanks with valid credentials")
    public void fill_in_the_blanks_with_valid_credentials() {
        String streetName=faker.address().streetAddress();
        String houseNumber=faker.address().buildingNumber();
        String zipCode=faker.address().zipCode();
        String cityName=faker.address().cityName();
        String phonenumber=faker.phoneNumber().phoneNumber();
        //Actions actions=new Actions(Driver.get());
        //actions.moveToElement(shoppingCartPage.firstname).perform();
        shoppingCartPage.info.click();
        shoppingCartPage.firstname.sendKeys(firstName);
        shoppingCartPage.lastname.sendKeys(lastName);
        shoppingCartPage.street.sendKeys(streetName);
        shoppingCartPage.houseNmr.sendKeys(houseNumber);
        shoppingCartPage.postalCode.sendKeys(zipCode);
        shoppingCartPage.city.sendKeys(cityName);
        shoppingCartPage.phoneNumber.sendKeys("042169315467");
        shoppingCartPage.additionalMessage.sendKeys(email);
        shoppingCartPage.additionalMessage.sendKeys(Keys.COMMAND,"a");
        shoppingCartPage.additionalMessage.sendKeys(Keys.COMMAND,"x");
        shoppingCartPage.emailAddress.sendKeys(Keys.COMMAND,"v");
    }
    @When("Click on Checkout button")
    public void click_on_Checkout_button() {
        shoppingCartPage.checkoutBtn.click();
    }
    @When("Select Cash option")
    public void select_Cash_option() {
        shoppingCartPage.cashMetod.click();
    }
    @When("Select Place my order … button")
    public void select_Place_my_order_button() {
        shoppingCartPage.placeOrderBtn.click();
        MyUtilities.waitFor(5);
    }
    @Then("Verify  {string} title message")
    public void verify_title_message(String expectedMessage) {
        String actualMessage=shoppingCartPage.successMessage.getText();
        Assert.assertEquals(expectedMessage,actualMessage);
    }
    @Then("Verify the mail address is the same user wrote before in description")
    public void verify_the_mail_address_is_the_same_user_wrote_before_in_description() {
       Assert.assertTrue(shoppingCartPage.descriptionMessage.getText().contains(email));
    }




}
