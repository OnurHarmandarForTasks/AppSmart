@Regression
Feature: API testing

  Scenario: API basic test
    Given Connect to API
    When Verify the status code is 200
    And Verify content type is "application/json; charset=utf-8"
    And Verify that Header "Server" is "Apache/2.4.10 (Debian)"
    And Verfy that Header has "Date"
    Then Verify that body has "Grundpizza Margherita" pizza option

  Scenario: API hamcrest Machers Test
    Given Connect to API and Verify all needed verifications in one line
