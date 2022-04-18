@Regression
  Feature: Delete selected product
    Background:
      Given Navigate to opening page
      When Choose "Bremen" Branch
      And Click on "Grundpizza Margherita" option
      And  Click on Confirm button

      Scenario: User can delete selected option by clicking increase button
        When Click on minus button of "Grundpizza Margherita" in shopping list
        Then Click on Confirm button
        Then Verify that "Your shopping cart is empty" message is displayed



