# Dubai Municipality - Static Website

This project is a static website built using **HTML**, **CSS**, and **jQuery**. The CSS is generated from **SCSS** using **node-sass**. The website contains several sections such as navigation, banners, tabs, and more.

## Features

- Responsive layout with **SCSS** for styling and **media queries**.
- **jQuery** for interactivity, such as tab switching and toggling navigation.
- **Node-sass** is used for compiling SCSS into CSS.
- Organized **assets folder** for CSS, JavaScript, and images.
- Accessibility features such as proper labels, titles and semantic HTML.

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
   * Open the index.html file in your browser to view the website.
   * To develop and make changes to the styles, edit the SCSS files and run npm run watch:sass to automatically compile the changes into CSS.

