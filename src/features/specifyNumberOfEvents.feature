Feature: Specify Number of Events

  Scenario: Number of Events is set to 20 as default
    Given the user hasn't clicked any button
    When the user opens the app
    Then the number of events should be 20 by default

  Scenario: User can select a number between 1-100
    Given the main page is open
    When the user starts entering a number in the number textbox
    Then the user should receive a list the length of the number they select

