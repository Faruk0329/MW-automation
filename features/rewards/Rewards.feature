@rewards
@smoke
@regression
Feature: Rewards Page 
  Scenario: All rewards page functions Are working

    Given User login to MetaWin with cookies
    And User click the Rewards page button
    And User click on see all button
    And User click on all ranks button
    Then User should able to see Leaderboard ranks