Feature: Show and Hide an Events Details

  Scenario: An event element is collapsed by default
    Given the user hasn't clicked any button
    When the user opens the app
    Then the events elements should be collapsed by default

  Scenario: User can expand an event to see its details
    Given the main page is open
    When the user clicks the show details button
    Then the events element should expand and show details

  Scenario: User can collapse an event to hide its details
    Given the event element is expanded
    When the user clicks the hide details button
    Then the events element should collapse