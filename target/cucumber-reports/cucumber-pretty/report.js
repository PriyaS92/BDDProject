$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFiles/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Google Homepage",
  "description": "This feature verifies the functionality on Google Homepage",
  "id": "google-homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Check that main elements on Google Homepage are displayed",
  "description": "",
  "id": "google-homepage;check-that-main-elements-on-google-homepage-are-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch IE browser with \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the text in textbox with \"\u003cSearch\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "google-homepage;check-that-main-elements-on-google-homepage-are-displayed;",
  "rows": [
    {
      "cells": [
        "URL",
        "Search"
      ],
      "line": 9,
      "id": "google-homepage;check-that-main-elements-on-google-homepage-are-displayed;;1"
    },
    {
      "cells": [
        "https://hub.uhg.com/",
        "rewards"
      ],
      "line": 10,
      "id": "google-homepage;check-that-main-elements-on-google-homepage-are-displayed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Check that main elements on Google Homepage are displayed",
  "description": "",
  "id": "google-homepage;check-that-main-elements-on-google-homepage-are-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I launch IE browser with \"https://hub.uhg.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the text in textbox with \"rewards\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "https://hub.uhg.com/",
      "offset": 26
    }
  ],
  "location": "Login.i_launch_IE_browser_with(String)"
});
formatter.result({
  "duration": 151955812037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rewards",
      "offset": 37
    }
  ],
  "location": "Test.user_enter_the_text_in_textbox_with(String)"
});
formatter.result({
  "duration": 1952098395,
  "status": "passed"
});
});