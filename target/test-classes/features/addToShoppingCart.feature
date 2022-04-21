@Regression
Feature: Menu Options

  Background:
    Given Navigate to opening page
    When Choose "Bremen" Branch

@wip
  Scenario Outline:User can add <Option>
  Then Click on "<Option>" option
  And  Click on Confirm button
  Then Verify that "<Option>" is added shopping cart without extras
  Examples:
    |Option  |
  |Grundpizza Margherita|
 # |Pizza Salami         |
 # |Pizza Funghi         |


Scenario Outline: User can add <Option> by choosing one option from all ekstra options
  Then Click on "<Option>" option
  And Click all ekstra options and select one option
  And  Click on Confirm button
  Then Verify that "<Option>" is added shopping cart with extras
  Examples:
    |Option  |
  |Grundpizza Margherita|
   |Pizza Quattro Stagioni|

    Scenario Outline: User can add <Option>a by choosing ALL options from ALL ekstra options
      Then Click on "<Option>" option
      And Click all ekstra options and select all option
      And  Click on Confirm button
      Then Verify that "<Option>" is added shopping cart with extras
      Examples:
        | Option |
      |Grundpizza Margherita|
      |Pizza Mafia          |

