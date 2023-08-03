# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Github Link](https://github.com/wendycheang/newsletter-sign-up-with-success-message)
- Live Site URL: [Netlify Site](https://neon-peony-ccb540.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS transitions and animations
- Gradients
- [React](https://reactjs.org/) - JS library

### What I learned

I learned and used animations and transitions for the first time

```css
.submit_button {
    border: none;
    border-radius: 7px;
    color: var(--white);
    font-weight: 700;
    font-size: var(--normal-font-size);
    padding: 1rem 0;


    /** animation **/
    background: var(--gradient);
    background-size: 200%;
    -webkit-transition : background-position .5s;
    -moz-transition : background-position .5s;
    -o-transition : background-position .5s;
    transition : background-position .5s;
    background-position: 100% 200%, 0 0;
}

.submit_button:hover{ 
    background-position:0 100%, 0 0;

    -webkit-box-shadow: 0px 16px 41px -16px rgba(255,98,87,1);
    -moz-box-shadow: 0px 16px 41px -16px rgba(255,98,87,1);
    box-shadow: 0px 16px 41px -16px rgba(255,98,87,1);
}
```

### Continued development

I would like to learn and practice more CSS animations and transitions. 

### Useful resources

- [Flex shrink, flex grow, flex basis](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) - I used this to solve a tricky problem with flexbox and images
- [Transitions and Animations](https://css-tricks.com/almanac/properties/t/transition/) - This was used to help me with transitions and animations
- [Gradient Generator](https://cssgradient.io/) - Used to help me generate a gradient
- [Box Shadow Generator](https://www.cssmatic.com/box-shadow) - Used to help me generate box shadows
- [Hard Stop Gradients](https://css-tricks.com/books/greatest-css-tricks/hard-stop-gradients/) - Needed to help me with transitions

## Author

- Frontend Mentor - [@wendycheang](https://www.frontendmentor.io/profile/wendycheang)
