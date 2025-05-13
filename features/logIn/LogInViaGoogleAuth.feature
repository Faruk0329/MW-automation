@mw
@smoke
@regression

Feature: MetaWin Login with Google Authentication
  Scenario: Successful login via Google Auth
    Given User navigate to MetaWin login page 
    And User click the Connect button
    And User select Google authentication option and login with email "myEmail" and password "myPassword"
    Then User should be redirected to the main dashboard