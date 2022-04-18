@Regression
Feature: Order the product

  Background:
    Given Navigate to opening page
    When Choose "Bremen" Branch
    And Click on "Grundpizza Margherita" option
    And  Click on Confirm button
  @wip
    Scenario: User can Order by clicking Order now button with filling blanks with valid credentials and cash
      When Click on Order now button
      And Fill in the blanks with valid credentials
      And Click on Checkout button
      And Select Cash option
      And Select Place my order … button
      Then Verify  "Your order was successful!" title message
      And Verify the mail address is the same user wrote before in description