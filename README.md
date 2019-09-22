<MainGrid>

<HeaderTitle>
  
# Java REST API 
<TitleAction href="https://github.com/stefanosAgelastos/personalRest" label="Go to github repo" />
</HeaderTitle>


<InfoGrid>

<InfoPaper>
  
## Description

This is a REST API, made with the Spring Boot framework.

</InfoPaper>

<InfoPaper>
<MyChip label="Back-end Development"/>
<MyChip label="Java"/>
<MyChip label="Spring Boot 2.0"/>
<MyChip label="Rest"/>
<MyChip label="Hibernate"/>
<MyChip label="Spring"/>
<MyChip label="Rest"/>
<MyChip label="Hibernate"/>
</InfoPaper>

</InfoGrid>

<PanelGrid>
<Panel id="1" heading="What?" secondaryHeading="About the technologies I used" >

### The Stack:
- Javascript
- React 16.9
- axios
- Jest
- Enzyme
- react-router-dom
</Panel>

<Panel id="2" heading="For Devs" secondaryHeading="About the project structure" >

### In /src

You will find, the application starting point `index.js`, the root component `App.js` and the default `App.test.js`, the enzyme configuration file `setupTests.js` and the main styling sheet `index.css`.

### in /src/util

You will find `auth.context.js` that declares and exports the default state of the autorization Context. 
**Note** `auth.service.js` provides all the async methods for the authorization api, the methods return a promise that throws custom errors for requests status different than 200.

### in /src/components

You will find all the view rendering components of the application. 

### in /src/assets

You will find static assets like fonts and icons.

</Panel>

<Panel id="3" heading="For Devs" secondaryHeading="Clone and install" >

## How to use

**Note : npm6** is required to install dependencies properly.
**Note : Node Server** must be up and running on your local machine.
Download or clone the repo

```sh
git clone repo-url-here
cd client
```

Install it and run:

```sh
npm install
npm start
```  

</Panel>

<Panel id="4" heading="For Devs" secondaryHeading="NPM scripts" >

## Available Commands From Create React App

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


</Panel>

</PanelGrid>


</MainGrid>
