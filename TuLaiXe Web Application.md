# TuLaiXe Web Application

## Decrision

Imagine you are traveling to beautiful somewhere without your car because some reason. This is an inconvenient for your trip if you want to discover location where you arrived by yourself. Don't worry, you can access ours website: tulaixe.com to find a vehicle suitable for you fastly and conveniantly.

## User Story

### BackGround

#### Jobber

Local people who have cars need register a account on website.They should provide a name, email, password and type user is "Jobber" to create a account. The email, type user cann't change and email is unique in system. Name and password can be change later

After create account, they can post their info vehicle such as: time available, cost, model car, image, deposit, phone number, localtion, insurance... All of this can be update later. Jobber can see all list customer request, accept or delince the request.

#### Renter

Customer who rent the vehicle need register a account on website.They should provide a name, email, password and type user is "Renter" to create a account. The email, type user cann't change and email is unique in system. Name and password can be change later

Then they can search by model car, filter the time available or price, require "Jobber" drive to define position, rating the car from 1 to 5 star and with comment, add a "Jobber" to Favorite list, send Request rent the car ...

### Authentication

- As a Jobber or Renter, I can sign in with my email, password, type user: "Jobber" or "Renter"
- As a Jobber or Renter, I can register a new account with my email, password and type user: "Jobber" or "Renter"
- As a Jobber or Renter, I can stay signed in with refresh page

### Jobber

- As a Jobber, I can get all my car
- As a Jobber, I can update my car info
- As a Jobber, I can update my info: name, password, avatar, address
- As a Jobber, I can see all list rent car request

### Renter

- As a Renter, I can see all list Jober's car
- As a Renter, I can see a car details of Jobber
- As a Renter, I can update my info: name, password, avatar, address
- As a Renter, I can cancel a request to Jobber
- As a Renter, I can add a car to "List wish"

### Cars

- As a Jobber, I can post one or many cars
- As a Jobber, I can update info a car
- As a Jobber, I can delete a car from list cars
- As a Jobber, I can get history of rent cars service

### Matching request

- As a Renter, I can send a request to Jobber
- As a Jobber, I can accept or decline a rent car request
- As a Jobber or Renter, I can see a car on service

### Feedback

- As a Renter, I can create a feeback to Jobber about service
- As a Renter, I can edit a feeback
- As a Renter, I can delete a feeback

## API endpoints

### Authentication

```
* @route POST /auth/login
* @description Log in with username and password
* @body {email, password}
* @access Public
```

### Jobber

```
* @route POST /jobbers
* @description Register account Jobber
* @body {name, email, password, typeUser}
* @access Public
```

```
* @route GET /jobbers/:jobberID
* @description Get info of a Jobber
* @body {}
* @access Login required
```

```
* @route PUT /jobbers/:jobberID
* @description Update info of a Jobber
* @body {name, avatar, location, phoneNumber}
* @access Login required
```

### Renter

```
* @route POST /renters
* @description Register account Renter
* @body {name, email, password, typeUser}
* @access Public
```

```
* @route GET /renters/:renterID
* @description Get info of a Renter
* @body {}
* @access Login required
```

```
* @route PUT /renters/:renterID
* @description Update info of a Renter
* @body {name, avatar, phoneNumber}
* @access Login required
```

### Car

```
* @route POST /cars
* @description Create a new car
* @body {name, model, color, image, seat, fuel, isAvalibale, insurance, price, rentCount}
* @access Login required
```

```
* @route GET /cars?page=1&limit=10
* @description Get list of cars with pagination
* @body {}
* @access Login required
```

```
* @route GET /cars/:carId
* @description Get a single car
* @body {}
* @access Login required
```

```
* @route PUT /cars/:carId
* @description Update a single car
* @body {name, model, color, image, seat, fuel, isAvalibale, insurance, price, rentCount}
* @access Login required
```

```
* @route DELETE /cars/:carId
* @description Remove a car
* @body {}
* @access Login required
```

### Matching

```
* @route POST /mathching/request
* @description Renter send a request to Jobber
* @body {to: Jobber Id}
* @access Login required
```

```
* @route GET /mathching/request
* @description Get a list request from Renter to Jobber
* @body {}
* @access Login required
```

```
* @route PUT /mathching/request/:carId
* @description Accept/Decline the request
* @body {status: "accepted" or "declined"}
* @access Login required
```

```
* @route DELETE /mathching/request/:carId
* @description Remove a request
* @body {}
* @access Login required
```

### Feedback

```
* @route POST /feedbacks
* @description Create a feedback for a car have rent by Renter
* @body {comment, ratePoint}
* @access Login required
```

```
* @route GET /feedbacks
* @description GET a list feedback for a car have rent by Renter
* @body {}
* @access Login required
```

```
* @route PUT /feedbacks/:carId
* @description update a feedback for a car have rent by Renter
* @body {comment, ratePoint}
* @access Login required
```

```
* @route DELETE /feedbacks/:carId
* @description DELETE a feedback for a car have rent by Renter
* @body {}
* @access Login required
```

### History rent car

```
* @route GET /historys/:carId
* @description GET a list history for a car have rent before
* @body {}
* @access Login required
```

## Relational Diagram

![](https://i.imgur.com/VQhdCd0.png)
