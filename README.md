# meet

React app for event planning

## About

This is a serverless, PWA app built using the TDD process. It's main purpose is to show users events by city, date and time, so that they can plan accordingly.
It uses the Google calendar API to fetch events.

## User Stories:

1. As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

## How to Use:

From CLI: `npm run start`

**Dependencies required for use:**

* React
* Jest-Cucumber
* Enzyme
* Puppeteer
* Atatus-spa
* Axios

This app used Create-React-App for the basic structure before customization and app definition. This means some dependencies are installed automatically when React is used. It also uses Google's Calendar API for events.

**Dependencies as defined in package.json:**

    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^12.1.5",
    "@testing-library/user-event": "^12.6.0",
    "atatus-spa": "^4.5.0",
    "axios": "^0.27.2",
    "nprogress": "^0.2.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.1",
    "recharts": "^2.1.13",
    "web-vitals": "^0.2.4",
    "workbox-background-sync": "^5.1.4",
    "workbox-broadcast-update": "^5.1.4",
    "workbox-cacheable-response": "^5.1.4",
    "workbox-core": "^5.1.4",
    "workbox-expiration": "^5.1.4",
    "workbox-google-analytics": "^5.1.4",
    "workbox-navigation-preload": "^5.1.4",
    "workbox-precaching": "^5.1.4",
    "workbox-range-requests": "^5.1.4",
    "workbox-routing": "^5.1.4",
    "workbox-strategies": "^5.1.4",
    "workbox-streams": "^5.1.4"

  Please note that not all of these need to be installed individually as they are part of libraries. This is for reference only if you run into errors with dependencies. 

  