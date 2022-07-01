# meet
React app for event planning

#About
This is a serverless, PWA app built using the TDD process. It's main purpose is to show users events by city, date and time, so that they can plan accordingly.
It uses the Google calendar API to fetch events.

#User Stories:

Feature 2: Show/Hide an Event’s Details

Scenario 1: As a user, I should see the event element collapsed by default, so that I can open it as desired and it won’t obstruct views.
Scenario 2: As a user, I want to be able to expand an event to see its details so I can read them and understand the event.
Scenario 3: As a user, I want to be able to collapse an event to hide its details so it doesn’t clutter the screen.

Feature 3: Specify Number of Events

Scenario 1: As a user, I want the default number of events displayed to be 32 when I haven’t specified the number so the screen isn’t overloaded with events.
Scenario 2: As a user I want to be able to change the number of events I want to see, so I can make decisions about a smaller or larger number.

Feature 4: Use the App When Offline

Scenario 1: As a user I want the app to show cached data when there’s no internet connection, so that I can still access that data.
Scenario 2: As a user I want to see an error displayed when the settings are changed, so that I know what I can access offline.

Feature 5: Data Visualization

Scenario 1: As a user I want the app to show a chart with the number of upcoming events in each city so I can plan around the data displayed.
