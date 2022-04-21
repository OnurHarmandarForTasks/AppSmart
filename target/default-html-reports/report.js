$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addToShoppingCart.feature");
formatter.feature({
  "name": "Menu Options",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User can add \u003cOption\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "Click on \"\u003cOption\u003e\" option",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that \"\u003cOption\u003e\" is added shopping cart without extras",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Option"
      ]
    },
    {
      "cells": [
        "Grundpizza Margherita"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to opening page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.navigate_to_opening_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose \"Bremen\" Branch",
  "keyword": "When "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.choose_Branch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can add Grundpizza Margherita",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "Click on \"Grundpizza Margherita\" option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickOnOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.click_on_Confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"Grundpizza Margherita\" is added shopping cart without extras",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.verifyThatIsAddedShoppingCartWithoutExtras(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});