package com.appSmart.tests.stepDefinitions;

import com.appSmart.tests.pages.MenuOptionsPage;
import com.appSmart.tests.pages.OpeningPage;
import com.appSmart.tests.utilities.ConfigurationReader;
import com.appSmart.tests.utilities.Driver;
import com.appSmart.tests.utilities.MyUtilities;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class NavigateToBranchesStepDefs {
    OpeningPage openingPage=new OpeningPage();
    MenuOptionsPage menuOptions=new MenuOptionsPage();

    @Given("Navigate to opening page")
    public void navigate_to_opening_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }


    @When("Choose {string} Branch")
    public void choose_Branch(String branch) {
        if (branch.equals("Bremen")){
            openingPage.bremenPickUpBtn.click();
            MyUtilities.waitFor(2);
        }else if (branch.equals("Delmenhorst")){
            openingPage.delmenhorstPickUpBtn.click();
            MyUtilities.waitFor(3);
        }
    }

    @Then("Verify the {string} Branch is opened")
    public void verify_the_Branch_is_opened(String branch) {
       if (branch.equals("Bremen")){
           Assert.assertTrue(Driver.get().getCurrentUrl().contains("bremen"));
       }else if (branch.equals("Delmenhorst")){
           Assert.assertTrue(Driver.get().getCurrentUrl().contains("delmenhorst"));
       }
    }


    @And("Select {string} Branch from above the left side of page")
    public void selectBranchFromAboveTheLeftSideOfPage(String branch) {
        menuOptions.branchSelector.click();

        if (Driver.get().getCurrentUrl().contains("bremen")){
            menuOptions.switchBranch.click();
            MyUtilities.waitFor(3);
            Assert.assertTrue(Driver.get().getCurrentUrl().contains("delmenhorst"));
        }else if (Driver.get().getCurrentUrl().contains("delmenhorst")){
            menuOptions.switchBranch.click();
            MyUtilities.waitFor(3);
            Assert.assertTrue(Driver.get().getCurrentUrl().contains("bremen"));
        }
    }
}
