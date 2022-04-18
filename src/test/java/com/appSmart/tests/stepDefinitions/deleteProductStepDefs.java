package com.appSmart.tests.stepDefinitions;

import com.appSmart.tests.pages.ShoppingCartPage;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class deleteProductStepDefs {

    @Then("Verify that {string} message is displayed")
    public void verify_that_message_is_displayed(String expectedMessage) {
        String actualMessage=new ShoppingCartPage().emptyMessage.getText();
        System.out.println("actualMessage = " + actualMessage);
        Assert.assertEquals(expectedMessage,actualMessage);
    }

}
