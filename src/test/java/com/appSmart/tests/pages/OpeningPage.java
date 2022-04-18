package com.appSmart.tests.pages;

import com.appSmart.tests.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OpeningPage {
    public OpeningPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(xpath = "(//button)[2]")
    public WebElement bremenPickUpBtn;

    @FindBy(xpath = "(//button)[3]")
    public WebElement delmenhorstPickUpBtn;





}
