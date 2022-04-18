@Regression
Feature: Product Decrease and Increase

  Background:
    Given Navigate to opening page
    When Choose "Bremen" Branch
    And Click on "Grundpizza Margherita" option
    And  Click on Confirm button

    Scenario: User can decrease number of products by clicking plus button
      When Click on plus button of "Grundpizza Margherita" in shopping list
      Then Verify that "Grundpizza Margherita" is decreased

  Scenario: User can increase number of products by clicking plus button
    When Click on plus button of "Grundpizza Margherita" in shopping list
    When Click on minus button of "Grundpizza Margherita" in shopping list
    Then Verify that "Grundpizza Margherita" is increased

    Scenario: User can decrease number of product by choosing the same product from products list
      And Click on "Grundpizza Margherita" option again
      And  Click on Confirm button
      Then Verify that "Grundpizza Margherita" is decreased








