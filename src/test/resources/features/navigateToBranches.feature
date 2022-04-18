@Regression
Feature: Navigate to branches

  Scenario: User can choose Bremen Branch in opening page
    Given Navigate to opening page
    When Choose "Bremen" Branch
    Then Verify the "Bremen" Branch is opened

  Scenario: User can choose Delmenhorst Branch in opening page
    Given Navigate to opening page
    When Choose "Delmenhorst" Branch
    Then Verify the "Delmenhorst" Branch is opened

  Scenario: User can choose Bremen Branch in opening page
    Given Navigate to opening page
    When Choose "Bremen" Branch
    And Select "Delmenhorst" Branch from above the left side of page
    Then Verify the "Delmenhorst" Branch is opened

  Scenario: User can choose Bremen Branch in opening page
    Given Navigate to opening page
    When Choose "Delmenhorst" Branch
    And Select "Bremen" Branch from above the left side of page
    Then Verify the "Bremen" Branch is opened