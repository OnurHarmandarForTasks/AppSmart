package com.appSmart.tests.stepDefinitions;

import com.appSmart.tests.pages.ShoppingCartPage;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.text.DecimalFormat;

public class DiscountStepDefs {
    ShoppingCartPage shoppingCartPage=new ShoppingCartPage();
    @Then("Verify that {string} option is selected")
    public void verify_that_option_is_selected(String option) {
        //if option is selected class attribute valu should be "active"
        for (int i = 0; i < shoppingCartPage.shoppingOptions.size(); i++) {
            if (shoppingCartPage.shoppingOptions.get(i).getText().equals(option)){
                Assert.assertEquals(shoppingCartPage.shoppingOptions.get(i).getAttribute("class"),"active");
            }
        }
    }

    @Then("Verify that %{int} discount is applied")
    public void verify_that_discount_is_applied(int discountRange) {
        System.out.println("subTotal = " + shoppingCartPage.subTotal.getText());
        System.out.println("discount = " + shoppingCartPage.discount.getText());
        System.out.println("totalPrice = " + shoppingCartPage.totalPrice.getText());
        String[] subtotal=shoppingCartPage.subTotal.getText().split(" ");

        Double sub=Double.parseDouble(subtotal[0].replace(",","."));
        String[] discount=shoppingCartPage.discount.getText().split(" ");
        Double disc=Double.parseDouble(discount[0].substring(1).replace(",","."));
        String[] total=shoppingCartPage.totalPrice.getText().split(" ");
        Double totalPrice=Double.parseDouble(total[0].replace(",","."));
        System.out.println("sub = " + sub);
        System.out.println("disc = " + disc);
        System.out.println("totalPrice = " + totalPrice);

        DecimalFormat df = new DecimalFormat("#.##");
        double expectedDisc=sub*discountRange/100;
        System.out.println("expectedDiscFirst = " + expectedDisc);
        expectedDisc=Double.valueOf(df.format(expectedDisc));
        System.out.println("expectedDiscLast = " + expectedDisc);

        Double expectedTotal=sub-expectedDisc;
        expectedTotal=Double.valueOf(df.format(expectedTotal));
        System.out.println("expectedTotal = " + expectedTotal);
        Assert.assertEquals(expectedTotal,totalPrice);
    }

}
