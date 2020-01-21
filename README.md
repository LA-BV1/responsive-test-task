## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run dev`

WIll start serving app with lite-server package

## Solution throught process

In this task was used UI framework "Ant Design for React", since from design it was obvious that it used default components from Ant.

Also project is consisting from functional React components with modern React Hooks, since there were no need for class components and it was more convenient and easier to build with hooks.

## What you would do differently in a production environment

I would use Redux to store table data and modify it. I would transfer fetch calls into redux actions, so we could remove import/fetch call from components and make them more reusable. 

I would properly configure react-router, since here I used default config and structure with not thinking a lot about placing pages list in different file or creating 'routes' folder. 

Also I din't used css-preprocessors here, but I could use them for speeding things up.

## Parts not handled/not handled optimally on purpose and why

Sidebar icons colors are not changing from grey to blue. It was not necessary right now, since we have indication of active tab. I didnt received blue icons and wasn't adding not-necessary code for checking if tab is active for icons. In real development i could open svg images, changes theit stroke/fill color and make blue icons, then use them for active tabs.

I also didnt add spinners or tooltips to sidebar menu, since it is not necessary here.

On mobile screens we can hide sidebar and top-navigation, and place them all inside collapsing menu. But since there is not a lot of content, sidebar is small and it was not required, I left it for future improvments.

Navbar in header consisting from one item, since we have only one option in design. But in dev invironment I would not use navbar here, or would add more items.