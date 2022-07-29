###Meet App###
By Eryn Craig, 07/27/2022

##About##
The goal of this app was to create a progressive web application using test driven and behavioral driven development techniques. It uses the Google Calendar API to fetch upcoming events. The app itself is meant to give users events in cities close to them and allow the user to add them to their calendar.

##My Role & Thoughts##
I built this app based on the data provided by Google's calendar API. I used test-driven development with React, making sure each component passed all tests before building more of the app. This then went through integration testing to make sure components would also work together. Additionally, to use the API, Oauth had been implemented. Finally I put the app through end-to-end testing, making sure it was functional. Lastly, I used Object Oriented Programming to add alerts, then converted the web app to a Progressive Web Application.

I decided to use some built-in functions like slice() because I have not yet figured out a better way to list a specified number of objects. I know there is a better way, and that this is not best practice, but with my app I have not figured out the answer just yet. I will also be adding more styling in the future.

If I could, I would try to better understand how little to add to make tests pass during unit testing - sometimes I believe I would add too much vs the minimum needed. I also need a better grasp on pure functions - I intend to study this more. I know immutability is very important, and sometimes I think I miss the mark on some of my functions. I also have trouble determining where to place certain callbacks and functions, as I need to review hierarchy in React js and native. I learned a lot about these issues during this project, and intend to strengthen my understanding.

##The Result (in screenshots)##



##Git Repo:##
https://github.com/DarkFather63/meet

##Technology used:##
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

    devDependencies:
    "@wojtekmaj/enzyme-adapter-react-17": "^0.6.7",
    "enzyme": "^3.11.0",
    "gh-pages": "^4.0.0",
    "jest-cucumber": "^3.0.1",
    "puppeteer": "^15.4.0"

These are the dependencies installed for the project. These versions must be used for the project to run. To learn more, visit the repo and check out the README file. The primary testing tools used were Jest and Puppeteer. They worked great, and I'd recommend them to any learning developers.

Other notes:
This app was built based on the following user stories:
1.As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.