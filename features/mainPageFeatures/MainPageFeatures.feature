@mainpage
@smoke
@regression
Feature: MetaWin main page
  Scenario: Dropdown functions and search
    Given User login to MetaWin with cookies
    And User click providers dropdown button
    And User select "Metawin" from dropdown
    Then User should able to see Metawin games
    And User should able to search "Dice" game
    
    

