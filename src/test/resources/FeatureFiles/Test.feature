Feature: Google Homepage
This feature verifies the functionality on Google Homepage
 
Scenario Outline: Check that main elements on Google Homepage are displayed
Given I launch IE browser with "<URL>"
When user enter the text in textbox with "<Search>"

Examples:
|URL|Search|
|https://hub.uhg.com/|rewards|