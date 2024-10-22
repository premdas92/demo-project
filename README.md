# Demo Project - Static Website

This project is a static website, developed using **HTML**, **CSS**, **SCSS**, and **jQuery**. It aims to provide an interactive and accessible user experience with well-organized styles and optimized functionality.

## Overview

This static website showcases various sections like navigation, banners, tabs, and more. The site is designed to be responsive, accessible, and easy to maintain with the use of SCSS for styling. The project leverages **node-sass** for SCSS to CSS compilation, allowing easy management of styles, variables, and media queries. All assets (CSS, JS, images) are stored in organized directories to ensure proper structure.

## Features

- **Responsive Design**: Works seamlessly across desktops, tablets, and mobile devices.
- **Interactive Tabs**: Tab components that dynamically switch between content sections without page reloads.
- **SCSS for Styles**: Use of SCSS for modular, reusable, and scalable styling. Includes variables, mixins, and media queries for a clean, maintainable codebase.
- **Accessible Navigation**: The navigation supports both desktop and mobile views with a hamburger menu for smaller screens.
- **Fast Load Times**: Optimized static website for quick loading, ensuring a smooth user experience.
- **Cross-Browser Compatibility**: Works across modern browsers such as Chrome, Firefox, Safari, and Edge.

## Technologies Used

- **HTML5**: For creating the structure of the website.
- **CSS3**: For basic styling and layout.
- **SCSS**: For modular and maintainable styles using features like variables, nesting, and mixins.
- **JavaScript (jQuery)**: For adding interactivity and handling DOM manipulation (such as tabs and navigation toggle).
- **Node.js with node-sass**: Used for compiling SCSS files into CSS, allowing the usage of modern CSS preprocessor features.
- **Google Fonts**: The **Lato** font is used for the entire site, loaded from Google Fonts.
- **Font Awesome**: Icons are sourced from **Font Awesome 6**. These are used for navigation, buttons, and other interactive elements.
- **CDN for jQuery**: **jQuery 3.6.0** is included via a CDN link for simplicity.

### External Resources Used

1. **Google Fonts - Lato**: 
     ```html
     <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
     ```
   - This imports the **Lato** font with two font weights: 400 (regular) and 700 (bold).

2. **Font Awesome**:
     ```html
     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
     ```
   - Font Awesome provides the icons used in the project. Version **6.0.0-beta3** is used in this case.
  
3. **jQuery 3.6.0**:
     ```html
     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
     ```
   - jQuery is used for DOM manipulation and interactive components such as tab switching and menu toggling.

## Best Practices

- **Modular SCSS**: SCSS styles are split into multiple files (such as `colors.scss`, `mixins.scss`, etc.) for better management.
- **Responsive Design**: Media queries are used extensively, ensuring that the layout adapts to different screen sizes.
- **Semantic HTML**: HTML5 semantic tags (such as `<header>`, `<nav>`, `<main>`, `<section>`) are used to improve the accessibility and SEO of the website.
- **Accessibility**: Implemented focus management, keyboard accessibility for menus, and proper aria-labels for interactive elements.
- **Optimization**: Images and assets are optimized to ensure faster load times and performance across devices.


## Architecture

- **assets/**: Contains all static assets (CSS, JavaScript, images).
  - **css/**: Compiled CSS from SCSS files.
  - **js/**: Contains all JavaScript and jQuery scripts.
  - **images/**: Holds all image files used throughout the website.
- **scss/**: Contains the SCSS files for styling.
  - **colors.scss**: Stores all the color variables for the project.
  - **mixins.scss**: Contains mixins for reusable SCSS code, including media queries.
  - **common-styles.scss**: General-purpose styles, resets, and utilities.
  - **index.scss**: Imports all SCSS files (like colors, mixins, etc.).
  - **styles.scss**: The main SCSS file, where component-specific styles are written, and all imported files are compiled.
- **index.html**: The main HTML file for the website.
- **package.json**: Node.js configuration for managing dependencies and build scripts.

### Folder Structure

```
├── assets 
│ ├── css 
│      └── styles.css # Compiled CSS file 
│ ├── images # Contains all images
│ ├── js
│      └── main.js # Main JavaScript file
| ├── scss
│      ├── colors.scss # Stores variables for colors
│      ├── common-styles.scss # Contains common styles
│      ├── mixins.scss # Stores mixins for media queries
│      ├── index.scss # Imports all scss files
├── styles.scss # Main SCSS file that compiles to styles.css
├── index.html # Main HTML file
├── package.json # Node package configuration
└── README.md # Project documentation
```

## Installation

Follow the steps below to set up the project on your local machine:

### Prerequisites

Make sure you have **Node.js** installed. You can download it from [Node.js](https://nodejs.org/).

### Steps

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/premdas92/demo-project.git
   
2. Navigate to the project folder and install the required dependencies:
      ```bash
      cd demo-project
      npm install

4. Run the following script to compile the SCSS into CSS:
     ```bash
     npm run watch:sass

### SCSS Structure
   * **colors.scss**: Stores all the color variables for the project.
   * **common-styles.scss**: Contains common styles that can be reused throughout the site.
   * **mixins.scss**: Includes mixins, especially for handling media queries, to keep the SCSS modular and maintainable.
   * **index.scss**: Imports the SCSS partials (colors.scss, common-styles.scss, and mixins.scss) and is imported into the main styles.scss.
   * **styles.scss**: The main SCSS file where the actual component-specific styles are written.

### Assets
   * **css**: The CSS generated from SCSS is placed in assets/css/styles.css.
   * **js**: All jQuery functionality, including tab switching and toggling menus, is located in assets/js/main.js.
   * **images**: The images used in the project are located in assets/images.

### Usage
### Running the Project
   * Open the `index.html` file in your browser to view the website.
   * To develop and make changes to the styles, edit the `styles.scss` file and run `npm run watch:sass` to automatically compile the changes into CSS.

### Screenshots


