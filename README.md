
# Forest Group Inc. company website

A multi-page website for a fictitious company called Forest Group Inc.

## Project overview

The website was designed to present the offer of a fictitious company that specializes in the promotion and maintenance of green areas, like forests, parks and meadows. It contains subpages "*Home*", "*Offer*" and "*Contact*". On the "*Contact*" page there is a contact form with a validation of the user's input applied, as well as an interactive map that allows each user to determine the route to the company's headquarters from any location.

## Core features

- **_Home_ page** with general information and opinions about the company
- **_Offer_ page** presenting the services provided by Forest Group, as well as some of the most interesting tourist destinations it offers.
- **Contact form** on the **_Contact_ page** allowing users to submit a question.
- **An interactive map** on the **_Contact_ page** allowing users to determine a route to the company's headquarters from any location. Here, I built the map using an API called [Mapbox](https://docs.mapbox.com/) to customize the appearance and add a layer of interactivity.
- **Responsive design** tailored to a vide range of device screen sizes.
- **Accessibility support** for screen reader users provided by using appropriate ARIA attributes as well as applying some other WCAG guidelines.

# Technologies & tools

The website was bootstrapped using the following tools and technologies:

- **HTML5** - page structure
- **SCSS to CSS** - application of styles using a popular CSS preprocessor called **Sass**, and then compiling them down to pure CSS for better organization and easier maintenance of the CSS code
- **JavaScript ES6** - adding the layer of interactivity to ensure proper functioning of components like navigation bar, scroll-spy using the [Intersection Observer Web API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), user input validation in the contact form and an interactive map
- **Gulp.js** - automation of development tasks with [Gulp.js](https://gulpjs.com/), such as compilation, autoprefixing and minification of SCSS code, transpilation and minification of JavaScript ES6+ code, and image compression all for better rendering performance and enhanced compatibility with latest and older browsers
- **Module bundling** with [webpack-stream](https://www.npmjs.com/package/webpack-stream) for smooth integration of an ES6 module bundling tool with the regular stream of development tasks handled by Gulp.js, which allows for writing more organized and highly maintainable JavaScript code