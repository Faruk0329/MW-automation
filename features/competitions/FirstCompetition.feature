
@competitions
Feature: MetaWin web2 Competitions
  Scenario: Successful entry into a competition

    Given User login to MetaWin
    And User click the first competition
    And User click the Buy button
    Then User should see thanks message

