# ShoppingList-Mern-App

A application of shopping list jotting down items to buy, built by MERN stack tools.

## Demo link:

Access this project at [ShoppingList-Mern-App](https://shopping-list-mern-app.vercel.app/)!

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

## About The App

[ShoppingList-Mern-App](https://shopping-list-mern-app.vercel.app/) is my personal project focusing on connecting React application to the backend side (the server and database) to make this application MERN stack (MERN stands for MongoDB, Express, React.js, and Node.js). Instead of using cloud services like firebase, I've built the server and database from scratch. In terms of the connection between server and database, I introduced Mongoose, a library for MongoDB, making it easier and faster. Also, this application has a simple CRUD operation, adding, editing, and deleting items from the list powered by userReducer hook.

Users can create accounts to use the contents, viewing shopping list, adding items to the list, editing and deleting items from the list (guest login is also available for checking what users can do on this application). Also, users are able to toggle screen mode both light mode and dark mode clicking the icon on nav bar.

data of users and items are stored dynamically once new user is logged in or signed up, or users manipulate items on the shopping.

## Screenshots

![ShoppingList-Mern-App](https://user-images.githubusercontent.com/65790344/183144650-c7279ba3-6c89-4507-8da2-52e95b4d4ad3.png)

## Technologies

- `React` - version 18.1.0
- `Express` - version 4.18.1
- `Mongoose` - version 6.4.1
- `Chakra UI` - version 2.2.1

## Setup

- Download or clone the repository
- Run `npm install`
- Run `npm run dev` to start running the app

## Approach

- Made this application MERN-stack utilizing React.js, Express.js, Node.js, and MongoDB
- Introducing user authentication from scratch with hashed password taking advantage of bcrypt, a javascript library to create a hashed password, and token powered by JWT, another library for generating session token.
- Styled beautifully with Chakra-UI, the component library for React application
- Users can sort items on the shopping list by the category.
- Having the basic CRUD operation implemented with back-end side (MongoDB as the database and Express.js and Node.js as the server to send requests from the client side).

## Status

[ShoppingList-Mern-App](https://shopping-list-mern-app.vercel.app/) is still in progress to improve (fixing the design of Hero page a little).

## Credits

- [Kento Honda](https://github.com/keento0809)

## License

©︎KENTO HONDA 2022. All Rights Reserved.
