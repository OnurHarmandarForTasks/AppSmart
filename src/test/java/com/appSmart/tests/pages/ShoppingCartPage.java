package com.appSmart.tests.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ShoppingCartPage extends BasePage{
    @FindBy(xpath = "//div[@class='fas fa-plus-circle']")
    public List<WebElement> plusBtn;

    @FindBy(xpath = "//i[@class='fas fa-minus-circle']")
    public List<WebElement> minusBtn;

    @FindBy(xpath = "//div[@class='count-label count-label-animation-appear-done count-label-animation-enter-done']")
    public List<WebElement> numberOfProducts;

    @FindBy(xpath = "(//div[@class='title'])[1]")
    public WebElement emptyMessage;

    @FindBy(xpath = "//div[@class='switch']/span")
    public List<WebElement> shoppingOptions;

    @FindBy(xpath = "//div[@class='order-price']/div[2]")
    public WebElement subTotal;

    @FindBy(xpath = "//div[@class='discount']/div[2]")
    public WebElement discount;

    @FindBy(xpath = "//div[@class='total-price']/div[2]")
    public WebElement totalPrice;

    @FindBy(css = "button[class='button-order positive-action']")
    public WebElement orderBtn;

    @FindBy(xpath = "//div[@class='TextField_container__2zZiD']")
    public WebElement info;

    @FindBy(xpath = "//input[@data-test-id='name-input-basket']")
    public WebElement firstname;

    @FindBy(name = "lastName")
    public WebElement lastname;

    @FindBy(name = "street")
    public WebElement street;

    @FindBy(name = "houseNumber")
    public WebElement houseNmr;

    @FindBy(name = "zip")
    public WebElement postalCode;

    @FindBy(name = "city")
    public WebElement city;

    @FindBy(name = "email")
    public WebElement emailAddress;

    @FindBy(name = "phone")
    public WebElement phoneNumber;

    @FindBy(xpath = "//textarea")
    public WebElement additionalMessage;

    @FindBy(xpath = "//button[@class='Button_Button__17EPK Button_submit__oa1FT']")
    public WebElement checkoutBtn;

    @FindBy(id = "payment-method-cash-1")
    public WebElement cashMetod;

    @FindBy(xpath = "//button[@class='button-order positive-action']")
    public WebElement placeOrderBtn;

    @FindBy(xpath = "//div[@class='wrapper']/p[@class='title']")
    public WebElement successMessage;

    @FindBy(xpath = "//div[@class='wrapper']/p[@class='description']")
    public WebElement descriptionMessage;







    public WebElement plus(String product){
        WebElement element=null;
        for (int i = 0; i < plusBtn.size(); i++) {
            if (new MenuOptionsPage().productName().contains(product)){
            element=plusBtn.get(i);
            }
        }
        return element;
    }

    public String numberOfProduct(String product){
        String nmrOfProduct="";
        for (int i = 0; i < numberOfProducts.size(); i++) {
            if (new MenuOptionsPage().productName().contains(product)){
                nmrOfProduct=numberOfProducts.get(i).getText();
            }
        }

        return nmrOfProduct;
    }

    public WebElement minus(String product){
        WebElement element=null;
        for (int i = 0; i < plusBtn.size(); i++) {
            if (new MenuOptionsPage().productName().contains(product)){
                element=minusBtn.get(i);
            }
        }
        return element;
    }

}
