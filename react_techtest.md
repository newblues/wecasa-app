# Wecasa - React technical test

This test is part of the hiring process of Wecasa for a React developer position. It can be done as a web application with ReactJS or as a mobile application with React Native (up to you !). The goal of this test is to set up a simple app to book a haircut prestation at home. It's intended to get done in 4 to 6 hours, depending on your experience. The use of Redux is imposed, even if it could appear as overkill for such a small app.

Don't worry if you don't finish, just go as far as you can ! The program may be a bit amibitious for this timeframe.

## Goal

The final app must have 4 steps (4 "pages") :

1. Prestations selection : the user can add and remove prestations in his basket. He can add a same prestation several times (for example 2 "brushings"). The prestations catalog has to be fetched at the initialization of the app using the API (cf below). At the bottom of the page, the basket is displayed : it gives the total price (like "53,90€") and the total duration (like "1h30"). This basket will also be displayed on the 2 next steps. The user can access to the next step when the basket has at least one prestation.

2. Address selection : the user can choose the address for the booking, ideally with a Google Maps autocomplete (but a simple version with just a text input is OK). He can access to the next step when the address is set.

3. Appointment selection : the user can choose the date/hour for the booking. He can confirm his booking when a valid appointment is selected (in the future, everyday from 7am to 10pm). When submitting this last step, the booking is created using the API (cf below).

4. Confirmation : the user is informed that his booking is confirmed. He can start a new booking process by clicking on a dedicated button (he then goes back to the first step with an empty basket).

## Review

What we'll look at when reviewing your code :

* app functionality (does the app function as expected ?)
* folders and files structure (is the structure clear and consistent ? )
* code organization (are features extracted as components/libs when possible ?)
* code syntax, code style
* naming (are functions/classes/variables properly named ?)
* Git history (are commits atomic ? are commit messages clear and useful ?)
* dependencies (are third-party libraries well chosen ?)

What we **won't** look at :

* design
* documentation (we love doc, but don't waste time on that for this test)

What we **would love** to see :

* tests
* type checking
* lint tooling

## API documentation

### Get prestations catalog

    GET https://www.wecasa.fr/api/techtest/universe

This API endpoint will return the data for our haircut *universe* (in Wecasa terminology, a *universe* is defined as a business vertical with prestations and dedicated professionals). This data is our catalog of haircut prestations, organized by categories (*man*, *woman*, *child*).

A category is defined by :

* `reference` : its unique identifier
* `title` : a French name for display purpose
* `prestations` : an array of prestations

A prestation is defined by :

* `reference` : its unique identifier
* `title` : a French name for display purpose
* `price` : a price in euro cents (so `100` for 1€)
* `duration` : a duration in minutes

Example :

    $ curl https://www.wecasa.fr/api/techtest/universe \
        -H 'Accept: application/json'

### Create a booking

    POST https://www.wecasa.fr/api/techtest/booking

Required parameters :

* `prestations` : an array of prestations' references
* `appointment` : a ISO 8601 datetime for the appointment
* `address` : a non-empty String for the address

This API endpoint simulates the creation of a new *booking*. It accepts parameters as JSON or as form data (`application/x-www-form-urlencoded`).

Example :

    $ curl https://www.wecasa.fr/api/techtest/booking \
        -X POST \
        -H "Content-Type: application/json" \
        -H "Accept: application/json" \
        -d '{"prestations":["brushing"],"appointment":"2018-10-12T14:30:00+02:00","address":"46 Rue René Clair, 75018 Paris"}'

## Requirements

* Your code has to be versioned with Git
* Universe must be fetched from the API at app initialization (and not stored statically as a JSON file...)
* Redux must be used and must store the customer's basket and the universe
* Of course, third party libraries (npm packages) can be used

## Submission

Push your Git repository on the Git platform of your choice (Github, Bitbucket, whatever) and share this repo with us. Or send us a zip version of your code (with `.git` folder included of course !).
