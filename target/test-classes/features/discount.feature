@Regression
Feature: Discount

  Background:
    Given Navigate to opening page
    When Choose "Bremen" Branch



  Scenario Outline: User can buy any product when choosing pickup option with %10 discount
  And Click on "<Option>" option
  And Click all ekstra options and select one option
  And  Click on Confirm button
  Then Verify that "Pickup" option is selected
  Then Verify that %10 discount is applied
  Examples:
    | Option |
  |Grundpizza Margherita|
  |Pizza Sucuk          |


