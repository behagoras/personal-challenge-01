# [Personal challenge 01](https://github.com/behagoras/personal-challenge-01)

This is a personal challenge for practicing React, Redux, array transformations and styled component.

It consists on a **landing page** following the design in [src/design](src/design)

![](src/design/active-states.jpg)



## Brief

Users should be able to:

- **Interact with the optimal design** for the site depending on the screen size of their device (**responsive**).
- View the **states** of displacement for all interactive elements on the page.
- **Filter** job listings according to selected categories.

## Filters

We're using a mock api in the [src/mocks/data.json](src/mocks/data.json) as a local database and interacting via [Redux reducers](src/reducers).

To add a filter, the user must click on any **filtrable field** of any Job Position.

For each added filter, the lists will display all the selected filters.

Any filter could be deleted by clicking onthe filter in the filters list.

## How is structured the project

This is a regular Create React App so everything is in the folder [src](src/).

We have 3 types of components folders:

- [components](src/components): This folder contains every component with logic and styles.
- [layouts](src/layouts): This folder contains the main design intented to have the header and footer, If we want to make a different design screen this is the file to go.
- [pages](src/components): In this folder goes all the containers components intented to be used in the Router

 [App.jsx](src/App.jsx): This file has every global configuration, such as react-router and redux, We only have 1 route, but If you want to create new routes, this is the file to go.

Redux: We have just 1 reducer, located in [src/reducers/index.js](src/reducers/index.js).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
