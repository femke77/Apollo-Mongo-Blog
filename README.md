# Tech Blog Review App

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Description ✏️

A quick and simple blogging application built in TypeScript, React, and Apollo GQL with 1 level of comments. The focus here was not on CSS, so it's minimal. The app uses JWT authentication and Outlet context provided by react router dom to check loggedIn status when needed. An auth guard component protects the profile route. 

Currently using refetch functionality for updating the DOM but intend to switch to the Apollo cache. 


## Table of Contents 📖

[Installation](#installation)

[Usage](#usage)

[Issues](#known-issues)

[Contributing](#how-to-contribute)

[Tests](#tests)

[Credits](#credits)

[Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

```
npm i
```

## Usage

Clone the repository, run the install command and then 'npm start:dev'. Then navigate to the localhost port (3000) with your browser. Introspection available at 3001/graphql.

### Deployed Link

[Click here to go to deployed project](https://apollo-mongo-blog.onrender.com)

### Screenshots

![home](./assets/home.png)
![blog](./assets/blog.png)
![add](./assets/add.png)
![edit](./assets/edit.png)

---

## Known Issues

- Deployed to render so the load time is prohibitively slow. Need to switch to headless architechture, deploy client on Netlify and leave server on Render and implement CORS. 
- Need pagination implementation
- Client code is not as componentized as it should be i.e. no Comment or CommentList

## How To Contribute

Fork the repository and make a pull request with your new code.

## Tests

To run tests, run the following command:

```
No tests
```

## Credits

Bootstrap and React Bootstrap for quick and simple styling.

## Questions

If you have any questions about the repo or notice any bugs you want to report, open an issue or contact me directly at megan.meyers.388@gmail.com.
