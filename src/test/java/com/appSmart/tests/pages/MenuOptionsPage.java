package com.appSmart.tests.pages;

import com.appSmart.tests.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.List;

public class MenuOptionsPage extends BasePage{

    public WebElement menu(String option){
        String xpathOption="//h5[normalize-space()='"+option+"']";
        WebElement element= Driver.get().findElement(By.xpath(xpathOption));
        return element;
    }
    @FindBy(xpath = "//h5[@class='Heading_Heading__2JCuX productName']")
    public List<WebElement> menuoptions;

    @FindBy(xpath = "//div[@class='size-text']")
    public List<WebElement> sizeText;

    @FindBy(xpath = "//div[@class='button-size small']")
    public List<WebElement> sizeList;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement confirmBtn;

    @FindBy(css = "div[class='product-name']")
    public List<WebElement> shoppingCart;

    @FindBy(xpath = "//div[@data-testid='extra-group']")
    public List<WebElement> ekstraOptions;

    @FindBy(xpath = "//div[@class='option-wrapper'][1]")
    public WebElement firstOfAllExtras;

    @FindBy(xpath = "//div[@class='option-wrapper']")
    public List<WebElement> allExtras;

    @FindBy(xpath = "//div[@class='ingredients-text']")
    public List<WebElement> nameOfExtras;

    @FindBy(xpath = "//div[@class='item-ingredient']/div[1]")
    public List<WebElement> shoppingListExtras;



    public List<String> productName(){
        List<String > addedProducts=new ArrayList<>();
        List<WebElement> shoppingList=shoppingCart;
        for (int i = 0; i < shoppingList.size(); i++) {
            addedProducts.add(shoppingList.get(i).getText());
        }
        return addedProducts;
    }



}
