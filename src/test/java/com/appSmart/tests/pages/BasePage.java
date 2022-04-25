package com.appSmart.tests.pages;

import com.appSmart.tests.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {
    public BasePage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(css = "div[class='BranchSelector_BranchSelector__2urqT']")
    public WebElement branchSelector;

    @FindBy(css = "div[class='Branch_Branch__3CW3J']")
    public WebElement switchBranch;

    @FindBy(css = "div[class='button-standard']")
    public WebElement closePopUp;

}
