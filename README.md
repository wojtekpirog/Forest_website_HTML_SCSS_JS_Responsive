
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

# Installation steps

1. Clone the repository:

~~~
  git clone https://github.com/wojtekpirog/Forest_website_HTML_SCSS_JS_Responsive.git
~~~

2. Go to the directory of the project (here is the Bash command):

~~~
  cd ~/Desktop/path_to_the_project_directory
~~~

3. In the project's root folder, install dependencies from the *package.json* file, including Gulp.js:

~~~
  npm install
~~~

4. Run the local development server (uses [BrowserSync](https://browsersync.io/) for synchronised cross-browser and cross-platform testing):

~~~
  gulp
~~~

# Folder structure

~~~
  ├── docs/
  |   ├── assets/
  |   |   ├── fonts/
  |   |   ├── icons/
  |   ├── css/
  |   |   ├── style.min.css
  |   ├── images/
  |   ├── js/
  |   |   ├── main.min.js
  |   ├── contact.html
  |   ├── index.html
  |   ├── offer.html
  ├── node_modules/
  ├── src/
  |   ├── images/
  |   ├── js/
  |   |   ├── contact/
  |   |   ├── data/
  |   |   ├── homepage/
  |   |   ├── offer/
  |   |   ├── cookie_alert.js
  |   |   ├── footer.js
  |   |   ├── main.js
  |   |   ├── navbar.js
  |   ├── scss/
  |   |   ├── components/
  |   |   ├── utils/
  |   |   ├── _extralarge.scss
  |   |   ├── _large.scss
  |   |   ├── _medium.scss
  |   |   ├── _small.scss
  |   |   ├── _miscellaneous.scss
  |   |   ├── _reset.scss
  |   |   ├── style.scss
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── README.md
~~~

# Subpages

- **_Home_** - landing page which showcases the company's name and its mission, a pricing table describing the offer's variations and a slider presenting testimonials from some of the biggest business, media and marketing magazines.
- **_Offer_** - subpage containing the details of what the company does, what services it provides, and a list of most popular tourist destinations that it offers trips to. **Note:** As per project requirements, in order to open the "*Offer*" subpage, on the *Home* page you have to scroll down to the bottom of the "Offer" section and click the mint-green "Learn more" ("Dowiedz się więcej") link.
- **_Contact_** - subpage with location details, like the company's address, phone number, and e-mail address, a contact form and an interactive map where you can input your location and get directions to the company's headquarters if you wish to pay an on-prem visit.

# Author

**Wojciech Piróg** - [GitHub](https://github.com/wojtekpirog)