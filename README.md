# Smart Cow test task
Project technologies: 
* Webpack
* Typescript 
* React.js (v17)
* React router (v6 still in beta)
* Sass for styling

 No SDK used (which in my opinion not always good)

# Concepts
The project structure splitted into:
* applications - main SPA (and possible widgets), define set of routes and common state
* modules - pieces of functionality splitted by business domains
* shared - modules which should be shared by other modules

Top level components define dependencies for underlying components. The conception of splitting to business and UI components not strictly followed (used url`s from configuration obect).

Would be good to speak with the designer in order to define Design System variables. Now, a guess about them placed in ui-kit.scss file.

# Notes and todo
* there are not much complicated logic for components so unit tests are omitted, but for certain components need to add them.
* as well as storybook stories (which are definetly need to be added for UI-Kit)
* the way of state management and business functionality should be reviewd, probably state should be splitted between components or moved to domain services (like vide / auth / profile / billing  service)
