$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/API.feature");
formatter.feature({
  "name": "API testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "API basic test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Connect to API",
  "keyword": "Given "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.APIStepDefs.connect_to_API()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the status code is 200",
  "keyword": "When "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.APIStepDefs.verify_the_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify content type is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.APIStepDefs.verify_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that Header \"Server\" is \"Apache/2.4.10 (Debian)\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.APIStepDefs.verifyThatHeaderIs(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verfy that Header has \"Date\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.APIStepDefs.verfy_that_Header_has(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that body has \"Grundpizza Margherita\" pizza option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.APIStepDefs.verify_that_body_has_pizza_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "API hamcrest Machers Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Connect to API and Verify all needed verifications in one line",
  "keyword": "Given "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.APIStepDefs.connectToAPIAndVerifyAllNeededVerificationsInOneLine()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/addToShoppingCart.feature");
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
  "keyword": "Scenario Outline"
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
    },
    {
      "cells": [
        "Pizza Salami"
      ]
    },
    {
      "cells": [
        "Pizza Funghi"
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
  "name": "User can add Pizza Salami",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on \"Pizza Salami\" option",
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
  "name": "Verify that \"Pizza Salami\" is added shopping cart without extras",
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
  "name": "User can add Pizza Funghi",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on \"Pizza Funghi\" option",
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
  "name": "Verify that \"Pizza Funghi\" is added shopping cart without extras",
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
formatter.scenarioOutline({
  "name": "User can add \u003cOption\u003e by choosing one option from all ekstra options",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click on \"\u003cOption\u003e\" option",
  "keyword": "Then "
});
formatter.step({
  "name": "Click all ekstra options and select one option",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that \"\u003cOption\u003e\" is added shopping cart with extras",
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
    },
    {
      "cells": [
        "Pizza Quattro Stagioni"
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
  "name": "User can add Grundpizza Margherita by choosing one option from all ekstra options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "Click all ekstra options and select one option",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickAllEkstraOptionsAndSelectOneOption()"
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
  "name": "Verify that \"Grundpizza Margherita\" is added shopping cart with extras",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.verifyThatIsAddedShoppingCartWithExtras(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "User can add Pizza Quattro Stagioni by choosing one option from all ekstra options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on \"Pizza Quattro Stagioni\" option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickOnOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click all ekstra options and select one option",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickAllEkstraOptionsAndSelectOneOption()"
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
  "name": "Verify that \"Pizza Quattro Stagioni\" is added shopping cart with extras",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.verifyThatIsAddedShoppingCartWithExtras(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User can add \u003cOption\u003ea by choosing ALL options from ALL ekstra options",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click on \"\u003cOption\u003e\" option",
  "keyword": "Then "
});
formatter.step({
  "name": "Click all ekstra options and select all option",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that \"\u003cOption\u003e\" is added shopping cart with extras",
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
    },
    {
      "cells": [
        "Pizza Mafia"
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
  "name": "User can add Grundpizza Margheritaa by choosing ALL options from ALL ekstra options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "Click all ekstra options and select all option",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickAllEkstraOptionsAndSelectAllOption()"
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
  "name": "Verify that \"Grundpizza Margherita\" is added shopping cart with extras",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.verifyThatIsAddedShoppingCartWithExtras(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "User can add Pizza Mafiaa by choosing ALL options from ALL ekstra options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on \"Pizza Mafia\" option",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickOnOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click all ekstra options and select all option",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickAllEkstraOptionsAndSelectAllOption()"
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
  "name": "Verify that \"Pizza Mafia\" is added shopping cart with extras",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.verifyThatIsAddedShoppingCartWithExtras(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/decrease_increase.feature");
formatter.feature({
  "name": "Product Decrease and Increase",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
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
formatter.step({
  "name": "Click on \"Grundpizza Margherita\" option",
  "keyword": "And "
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
formatter.scenario({
  "name": "User can decrease number of products by clicking plus button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on plus button of \"Grundpizza Margherita\" in shopping list",
  "keyword": "When "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.Decrease_IncreaseStepDefs.clickOnPlusButtonOfInShoppingList(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"Grundpizza Margherita\" is decreased",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.Decrease_IncreaseStepDefs.verifyThatIsDecreased(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.step({
  "name": "Click on \"Grundpizza Margherita\" option",
  "keyword": "And "
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
formatter.scenario({
  "name": "User can increase number of products by clicking plus button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on plus button of \"Grundpizza Margherita\" in shopping list",
  "keyword": "When "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.Decrease_IncreaseStepDefs.clickOnPlusButtonOfInShoppingList(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on minus button of \"Grundpizza Margherita\" in shopping list",
  "keyword": "When "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.Decrease_IncreaseStepDefs.clickOnMinusButtonOfInShoppingList(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"Grundpizza Margherita\" is increased",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.Decrease_IncreaseStepDefs.verifyThatIsIncreased(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.step({
  "name": "Click on \"Grundpizza Margherita\" option",
  "keyword": "And "
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
formatter.scenario({
  "name": "User can decrease number of product by choosing the same product from products list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on \"Grundpizza Margherita\" option again",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.Decrease_IncreaseStepDefs.clickOnOptionAgain(java.lang.String)"
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
  "name": "Verify that \"Grundpizza Margherita\" is decreased",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.Decrease_IncreaseStepDefs.verifyThatIsDecreased(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/deleteProduct.feature");
formatter.feature({
  "name": "Delete selected product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
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
formatter.step({
  "name": "Click on \"Grundpizza Margherita\" option",
  "keyword": "And "
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
formatter.scenario({
  "name": "User can delete selected option by clicking increase button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on minus button of \"Grundpizza Margherita\" in shopping list",
  "keyword": "When "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.Decrease_IncreaseStepDefs.clickOnMinusButtonOfInShoppingList(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Confirm button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.click_on_Confirm_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"Your shopping cart is empty\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.deleteProductStepDefs.verify_that_message_is_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/discount.feature");
formatter.feature({
  "name": "Discount",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User can buy any product when choosing pickup option with %10 discount",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click on \"\u003cOption\u003e\" option",
  "keyword": "And "
});
formatter.step({
  "name": "Click all ekstra options and select one option",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Confirm button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that \"Pickup\" option is selected",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify that %10 discount is applied",
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
    },
    {
      "cells": [
        "Pizza Sucuk"
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
  "name": "User can buy any product when choosing pickup option with %10 discount",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on \"Grundpizza Margherita\" option",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickOnOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click all ekstra options and select one option",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickAllEkstraOptionsAndSelectOneOption()"
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
  "name": "Verify that \"Pickup\" option is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.DiscountStepDefs.verify_that_option_is_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that %10 discount is applied",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.DiscountStepDefs.verify_that_discount_is_applied(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "User can buy any product when choosing pickup option with %10 discount",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "Click on \"Pizza Sucuk\" option",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickOnOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click all ekstra options and select one option",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.AddToShoppingCartStepDefs.clickAllEkstraOptionsAndSelectOneOption()"
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
  "name": "Verify that \"Pickup\" option is selected",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.DiscountStepDefs.verify_that_option_is_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that %10 discount is applied",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.DiscountStepDefs.verify_that_discount_is_applied(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/navigateToBranches.feature");
formatter.feature({
  "name": "Navigate to branches",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "User can choose Bremen Branch in opening page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
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
formatter.step({
  "name": "Verify the \"Bremen\" Branch is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.verify_the_Branch_is_opened(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can choose Delmenhorst Branch in opening page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
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
  "name": "Choose \"Delmenhorst\" Branch",
  "keyword": "When "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.choose_Branch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Delmenhorst\" Branch is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.verify_the_Branch_is_opened(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can choose Bremen Branch in opening page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
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
formatter.step({
  "name": "Select \"Delmenhorst\" Branch from above the left side of page",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.selectBranchFromAboveTheLeftSideOfPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Delmenhorst\" Branch is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.verify_the_Branch_is_opened(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can choose Bremen Branch in opening page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
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
  "name": "Choose \"Delmenhorst\" Branch",
  "keyword": "When "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.choose_Branch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"Bremen\" Branch from above the left side of page",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.selectBranchFromAboveTheLeftSideOfPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the \"Bremen\" Branch is opened",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.NavigateToBranchesStepDefs.verify_the_Branch_is_opened(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/order.feature");
formatter.feature({
  "name": "Order the product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
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
formatter.step({
  "name": "Click on \"Grundpizza Margherita\" option",
  "keyword": "And "
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
formatter.scenario({
  "name": "User can Order by clicking Order now button with filling blanks with valid credentials and cash",
  "description": "",
  "keyword": "Scenario",
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
  "name": "Click on Order now button",
  "keyword": "When "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.OrderStepDefs.click_on_Order_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill in the blanks with valid credentials",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.OrderStepDefs.fill_in_the_blanks_with_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.OrderStepDefs.click_on_Checkout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Cash option",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.OrderStepDefs.select_Cash_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Place my order … button",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.OrderStepDefs.select_Place_my_order_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify  \"Your order was successful!\" title message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.OrderStepDefs.verify_title_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the mail address is the same user wrote before in description",
  "keyword": "And "
});
formatter.match({
  "location": "com.appSmart.tests.stepDefinitions.OrderStepDefs.verify_the_mail_address_is_the_same_user_wrote_before_in_description()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});