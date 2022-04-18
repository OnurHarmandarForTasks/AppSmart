package com.appSmart.tests.stepDefinitions;

import com.appSmart.tests.pages.MenuOptionsPage;
import com.appSmart.tests.pages.ShoppingCartPage;
import com.appSmart.tests.utilities.MyUtilities;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Decrease_IncreaseStepDefs {
    ShoppingCartPage shoppingCartPage=new ShoppingCartPage();
    MenuOptionsPage menuOptions=new MenuOptionsPage();
    int oldNumberOfProduct;
    int decreasedNumberOfProduct;
    int increasedNumberOfProduct;

    @When("Click on plus button of {string} in shopping list")
    public void clickOnPlusButtonOfInShoppingList(String product) {
        oldNumberOfProduct= Integer.parseInt(shoppingCartPage.numberOfProduct(product));
        shoppingCartPage.plus(product).click();
        MyUtilities.waitFor(1);
        decreasedNumberOfProduct= Integer.parseInt(shoppingCartPage.numberOfProduct(product));
    }

    @Then("Verify that {string} is decreased")
    public void verifyThatIsDecreased(String product) {
        MyUtilities.waitFor(2);
        decreasedNumberOfProduct= Integer.parseInt(shoppingCartPage.numberOfProduct(product));
        System.out.println("oldNumberOfProduct = " + oldNumberOfProduct);
        System.out.println("actualNumberOfProduct = " + decreasedNumberOfProduct);
        Assert.assertTrue(decreasedNumberOfProduct>oldNumberOfProduct);
    }

    @When("Click on minus button of {string} in shopping list")
    public void clickOnMinusButtonOfInShoppingList(String product) {
        shoppingCartPage.minus(product).click();
        increasedNumberOfProduct= Integer.parseInt(shoppingCartPage.numberOfProduct(product));
    }

    @Then("Verify that {string} is increased")
    public void verifyThatIsIncreased(String product) {
        System.out.println("decreasedNumberOfProduct = " + decreasedNumberOfProduct);
        System.out.println("increasedNumberOfProduct = " + increasedNumberOfProduct);
        Assert.assertTrue(increasedNumberOfProduct<decreasedNumberOfProduct);
    }

    @And("Click on {string} option again")
    public void clickOnOptionAgain(String product) {
        oldNumberOfProduct= Integer.parseInt(shoppingCartPage.numberOfProduct(product));
        menuOptions.menu(product).click();
    }
}
