# Taxonomic Routing

This exercise has you building an experience to navigate some of the [Taxonomic Rank](https://en.wikipedia.org/wiki/Taxonomic_rank). We'll use [React Router](https://github.com/ReactTraining/react-router) to create the links and pages and manage browser history.


## Setup

After cloning this repo:

```sh
cd taxonomic-routing
npm install
npm run dev
```

You will need to set up `HashRouter` in your `client/index.js`. 

 * Import the router from 'react-router-dom' at the top of the file. _i.e. ` import { HashRouter as Router } from 'react-router-dom'`_
 * Inside your ReactDOM.render() function, you can then wrap the `<App />` component in `<Router></Router>` tags.


## Release 1

Let's start with the couple of components that make up the home page. Check out the `App.jsx` component. It currently contains the main header as shown in the following image, the instructions are in a `Home` component, and the beginnings of the `Nav` component are also in place.

 * Start by completing the `Nav` component so that it contains a list of rank names like in the image below.
 * Import and use the `Route` component from `react-router-dom` so that the `Nav` will show on all pages, but `Home` will only show on `'/'`.

![after release 1](readme-images/release-1.png)

Tip: _You can use `Object.keys()` on what is exported from `data/ranks.js` to get a list of rank names for the `Nav` component._

Note: _If you want to capitalise names, you'll need to write a `capitalise` function and call it when you need it. Perhaps skip it for now and come back to it later._


## Release 2

Next, add a route for `/list/:rank` to your `App.jsx` that shows the classifications for the selected rank. 

* Create a `Classifications` component for this route. It should use `params` to determine which rank type to list. 
* You will also need to use the `Link` component from `react-router-dom` in your `Nav`, to link the user to the correct classification list.

Notice how `Classifications` has replaced the `Home` component in the image below.

![after release 2](readme-images/release-2.png)

Note: _Don't worry about bolding the selected rank for the moment. You can come back and do it later._


## Release 3

When you select a classification, it should navigate to `/rank/:rank/:name` (remember that `Link` component). 

It should show a component that shows the `name` and `description` of the classification.

![after release 3](readme-images/release-3.png)



## Release 4

In this release, add a ```<Link to={`${props.match.url}/species`}>Show species</Link>``` and a nested route for `/list/:rank/:name/species` to your classification component from the previous release. 

This route should render a `SpeciesListing` component that shows all species in the selected classification. 

This is the first time you'll need to use `data/species.js`.

![after release 4](readme-images/release-4.png)

Tip: _You'll have to think a little about how to filter the species to just the ones that match the selected classification._



## Release 5

Create a new `/species/:id` route that uses a new `Species` component to show the `name`, `description`, `photo` and classifications of the species. Link each of the classifications to the routes you've already created.

![after release 5](readme-images/release-5.png)


## Future Releases

Here are some ideas for future releases:

* Add a _Home_ link in the `Nav` component.
* Bold the selected rank as shown in the release 2 screenshot.
* Capitalise the rank and classification names.
* Think about a different way you could navigate around this data and implement it in a different branch.

