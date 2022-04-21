package com.appSmart.tests.stepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import static org.hamcrest.Matchers.*;


import static io.restassured.RestAssured.given;
public class APIStepDefs {

    public Response response;
    //I found url from devtool/network
    String url="https://dev.delivery-app.app-smart.services/api3/1/products/1954";


    @Given("Connect to API")
    public void connect_to_API() {

        response=given().accept(ContentType.JSON)
                .when().get(url);
        response.prettyPrint();
    }

    @When("Verify the status code is {int}")
    public void verify_the_status_code_is(int expectedStatusCode) {
        int actualStatusCode=response.statusCode();
        System.out.println("actualStatusCode = " + actualStatusCode);
        Assert.assertEquals(expectedStatusCode,response.statusCode());
    }
    @When("Verify content type is {string}")
    public void verify_content_type_is(String expectedContentType) {
        String actualContentType=response.contentType();
        System.out.println("actualContentType = " + actualContentType);
        Assert.assertEquals(expectedContentType,response.contentType());
    }

    @And("Verify that Header {string} is {string}")
    public void verifyThatHeaderIs(String header, String expectedValue) {
        String actualHeaderValue=response.header(header);
        System.out.println("actualHeaderValue = " + actualHeaderValue);
        Assert.assertEquals(expectedValue,response.header(header));
    }

    @When("Verfy that Header has {string}")
    public void verfy_that_Header_has(String header) {
        Assert.assertTrue(response.headers().hasHeaderWithName(header));
    }

    @Then("Verify that body has {string} pizza option")
    public void verify_that_body_has_pizza_option(String option) {
        Assert.assertTrue(response.body().asString().contains(option));
    }




    //Verification with Hamcrest Matchers
    @Given("Connect to API and Verify all needed verifications in one line")
    public void connectToAPIAndVerifyAllNeededVerificationsInOneLine() {
         given().accept(ContentType.JSON)
                .when().get(url)
                .then().assertThat().statusCode(200)
                .and().contentType(equalTo("application/json; charset=utf-8"))
                .and().header("Server",equalTo("Apache/2.4.10 (Debian)"))
                 .and().body("content.id[0]",equalTo(265862))
                .and().body("content.name[0]",equalTo("Grundpizza Margherita"))
                 .and().body("content.description[0]",equalTo("Pizzasauce, Käse"));
    }
}
