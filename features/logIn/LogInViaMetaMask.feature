

Feature: MetaWin Login with MetaMask Wallet
  Scenario: Successful login via MetaMask Wallet
    Given User navigate to MetaWin login page 
    And User click the Connect button
    And User select MetaMask authentication option and login with wallet address "0x1234567890abcdef1234567890abcdef12345678"
    Then User should be redirected to the main dashboard
  