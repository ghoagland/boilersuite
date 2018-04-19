# Boilersuite

## A React and Express boilerplate.

This is very much a work in progress.

### To install:

  1. In a _new_ directory, `git init` OR create an empty GitHub repo and clone that.
  2. Run the following to add this to your project: ```
    git remote add boilersuite https://github.com/ghoagland/boilersuite
    git fetch boilersuite
    git merge boilersuite/master
    ``` Now, if you wish to get any updates from this boilerplate, you can with a `git fetch boilersuite` and `git merge boilersuite/master`.
  3. `npm install` it!
  4. Update the project information in the `package.json`.

### To run:
  `npm run start-dev` will bundle your code and start serving up a small React app on port 8080.
  

### To lint: 
  * `npm run lint-script` lists JavaScript errors.
  * `npm run lint-script-warnings` is the same as above but includes warnings such as `console` statements.
  * `npm run lint-style` will lint just the CSS and SCSS files.
  * `npm run lint` combines `npm run lint-script` and `npm run lint-style`.
  

In future, the goal is to have branches with various libraries and functionalities added in: Sequelize for database interaction, Redux for front-end state management, OAuth, and WebSockets to name a few. This is not there yet! The main goal is to have a boilerplate that can be combined to have multiple other features.

This boilerplate is very much influenced by the Fullstack boilerplate, [boilermaker](https://github.com/fullstackacademy/boilermaker).

Many, _many_ thanks to [indiamos](https://github.com/indiamos), the linter queen.
