# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

[![Desktop_version](https://github.com/LidiaRJ/insure-landing-page/blob/main/screenshots/insure-landing-page-desktop.jpg)](https://github.com/LidiaRJ/insure-landing-page/blob/main/screenshots/insure-landing-page-desktop.jpg)
[![Mobile_version](https://github.com/LidiaRJ/insure-landing-page/blob/main/screenshots/insure-landing-page-mobile.jpg)](https://github.com/LidiaRJ/insure-landing-page/blob/main/screenshots/insure-landing-page-mobile.jpg)
[![Mobile_version_burger_menu](https://github.com/LidiaRJ/insure-landing-page/blob/main/screenshots/insure-landing-page-mobile-menu.jpg)](https://github.com/LidiaRJ/insure-landing-page/blob/main/screenshots/insure-landing-page-mobile-menu.jpg)
### Links

- Solution URL: [(https://github.com/LidiaRJ/insure-landing-page.git)](https://github.com/LidiaRJ/insure-landing-page.git)
- Live Site URL: [(https://lidiarj.github.io/insure-landing-page/)](https://lidiarj.github.io/insure-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

- Positioning of elements that overlap.
- JavaScript functionality for collapsible elements. 


```html
<div class="branding__content">
      <img class="logo" src="images/logo.svg" alt="logo">

      <nav class="nav__bar">
      <div class="nav__logo">
        <img class="logo" src="images/logo.svg" alt="logo">
      </div>
  
      <button class="burger__menu"></button>
      <div class="nav__content navContent">
        <ul>
          <li><a class="menu-link" href="#">How we work</a></li>
          <li><a class="menu-link" href="#">Blog</a></li>
          <li><a class="menu-link" href="#">Account</a></li>
          <li class="plansBtn"><a class="menu-link" href="#">View plans</a></li>
        </ul>
      </div>
    </nav>
```
```css
.branding__content {
    display: flex;
    flex-direction: column;
    background-image: url(./images/bg-pattern-footer-mobile.svg);
    background-color: var(--var-light-gray);
    background-repeat: no-repeat;
    background-size: 110%;
    height: 300px;
    width: 100%;
}
```


### Continued development
- Aquire more fluidity in the positioning of overlaping elements and the use of ::after pseudo elements.
- Further interactivity using JavaScript and the implementation of JS Frameworks in future projects. 


## Author
- Website - [Lidia Ruiz Jimeno](https://www.behance.net/Lidiarjimeno)
- Frontend Mentor - [@LidiaRJ](https://www.frontendmentor.io/profile/LidiaRJ)
- Github - [@LidiaRJ](https://github.com/LidiaRJ)
- Codepen - (https://codepen.io/lilyrj)

