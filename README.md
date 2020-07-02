# Tv Show Application
This is a TV shows search application that allows users to search for the tv shows they want, also selecte from the most popular tv shows. Users can also view the shows based on genres. They can also see the details of the shows, the cast, crew and some images available from the show. This application fetches data from an api, "http://api.tvmaze.com".

Note: If you face CORS issue, please switch to open network.

## Installations
## Vue CLI
```
Vue Js is a progressive framework with a small size of around ~21kb , easy to understand and scale large 
application. For more informatyion refer the following pages.

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a 
Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Project Guidelines
* This application is using camelCase naming conventions for Method Naming, variable, object declaration,
Example : onSubmit() , fetchShows etc..

* This application is using small case for Folder Naming Convention, Example : views, components.
and for files Pascal case for files exaple: DashBoard.vue, Details.vue

* Vuex Standards: 
    * mutations: All Caps example: SEARCH_SHOWS
    * actions: camelCase example: fetchShows 
    * state: smallcase ex: shows
    * getters: camelCase ex: getShowsByRating

### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios

2. Vuex:
   Vuex is a state management pattern + library for Vue.js.
   Please refer below url for more details:
   https://vuex.vuejs.org/   


4. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
