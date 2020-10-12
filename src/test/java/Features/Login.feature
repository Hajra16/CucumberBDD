Feature: free CRM application test

Background: 
Given user open browser

@positive
Scenario: Login validation test with valid credentials

Then user is on login page
Then user enter email and password
Then user click on submit button
Then user lands on home page

@negative
Scenario: Login validation test with wrong credentials

Then user is on the login page
Then user enters the email and password
Then user clicks on the login button
Then user lands on the home page



