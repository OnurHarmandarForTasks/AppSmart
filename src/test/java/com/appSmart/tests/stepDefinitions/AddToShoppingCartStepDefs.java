package com.appSmart.tests.stepDefinitions;

import com.appSmart.tests.pages.MenuOptionsPage;
import com.appSmart.tests.utilities.Driver;
import com.appSmart.tests.utilities.MyUtilities;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class AddToShoppingCartStepDefs {
        MenuOptionsPage menuOptions=new MenuOptionsPage();

        List<WebElement> NameOfExtras=new ArrayList<>();
        List<WebElement> expectedExtras=new ArrayList<>();
        List<WebElement> actualExtras=new ArrayList<>();

    @Then("Click on {string} option")
    public void clickOnOption(String option) {
        //Shop is not working for pickup option between 23:59/12:00
        //So we have to skip worning alert
        //Firs way: I used time class to compare time is between 00/12 or not

       /* String time= String.valueOf(LocalTime.now());
        String[] timeArray=time.split(":");
        int hour=Integer.parseInt(timeArray[0]);
        if(hour>=0&&hour<12){
            Driver.get().findElement(By.cssSelector("div[class='button-standard']")).click();
            menuOptions.menu(option).click();
        }else{
            menuOptions.menu(option).click();
        }
        */
        //Second way with try/cathch block
        try{
            Driver.get().findElement(By.cssSelector("div[class='button-standard']")).click();
        }catch (Exception e){
            System.out.println("Shop is Open");
        }finally {
            menuOptions.menu(option).click();
        }

    }

    @Then("Click on Confirm button")
    public void click_on_Confirm_button() {
        menuOptions.confirmBtn.click();
    }

    @Then("Verify that {string} is added shopping cart without extras")
    public void verifyThatIsAddedShoppingCartWithoutExtras(String selectedProduct) {
        Assert.assertTrue(menuOptions.productName().contains(selectedProduct));
    }

    @And("Click all ekstra options and select one option")
    public void clickAllEkstraOptionsAndSelectOneOption() {
        List<WebElement> ekstras=menuOptions.ekstraOptions;
        for (int i = 0; i < ekstras.size(); i++) {
            ekstras.get(i).click();
            if(i==0){
                continue;
            }else {
                menuOptions.firstOfAllExtras.click();
                expectedExtras.add(menuOptions.firstOfAllExtras);
            }
        }
    }

    @And("Click all ekstra options and select all option")
    public void clickAllEkstraOptionsAndSelectAllOption() {
        //click all ekstras one by one
        //and add their name to expected extra list
        List<WebElement> ekstras=menuOptions.ekstraOptions;
        List<WebElement> allEkstraOptions=new ArrayList<>();

        for (int i = 0; i < ekstras.size(); i++) {
            ekstras.get(i).click();
            MyUtilities.waitFor(1);
            allEkstraOptions=menuOptions.allExtras;

            for (int j = 0; j < allEkstraOptions.size(); j++) {

                if(i==0||i==6){
                    continue;
                }else {
                    NameOfExtras=menuOptions.nameOfExtras;
                    expectedExtras.add(NameOfExtras.get(j));
                }
                allEkstraOptions.get(j).click();
            }
            MyUtilities.waitFor(1);
        }

    }

    @Then("Verify that {string} is added shopping cart with extras")
    public void verifyThatIsAddedShoppingCartWithExtras(String selectedProduct) {
        actualExtras=menuOptions.shoppingListExtras;
        System.out.println("actualExtras.size() = " + actualExtras.size());
        System.out.println("expectedExtras.size() = " + expectedExtras.size());
        Assert.assertEquals("Verify actual extras",expectedExtras.size(),actualExtras.size());
        Assert.assertTrue(menuOptions.productName().contains(selectedProduct));
    }
}
