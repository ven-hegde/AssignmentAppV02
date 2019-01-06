# AssignmentAppV02
Assignment Appliction on Yelp dataset.

### About
Single page application developed using Vue.js Jvascript framework. Application template and components are developed using Vue.js templates. It also makes use of other javascript Libraries such as axios to make api call.
Application includes following components.
- Header
- Footer
- Page Layout
- Component for main content
- Login
- Logout
- Error Displaying

Application Allows the User to login and logout and filter the restaurants based on the Alphabetical order, rating order. User can also search for the restaurants by name or locality or address.


### Prerequisites to run the project
```
Node server
npm
```

### Project Setup
project setup for Vue.js application, includes

Editor configuration
Webserver configuration
Webpack setup
Development middleware configuration
Hot reloading in browser
Linting setup
ES6 Transpiling

### Installing
1. create .editorconfig file

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = 1f
insert_final_newline = true
trim_trailing_whitespace = true
```
2. create .eslintrc.js file
```
module.exports = {
    root: true,
    parserOptions: {
      sourceType: "module"
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: "standard",
    plugins: ["html"]
  };
```
3. create .babelrc file
```
{
  "presets": [
    [
      "es2015",
      {
        "modules":false
      }
    ],
    "stage-2"
  ],
  "ignore": [
    "node_modules/*"
  ]
}
```
4. run command npm install at project root directory.
5. To start the server - npm start
