```
                 )   (      (         )
   (  (       ( /(   )\ )   )\ )   ( /(      (
   )\))(   '  )\()) (()/(  (()/(   )\())     )\
  ((_)()\ )  ((_)\   /(_))  /(_)) ((_)\    (((_)
  _(())\_)()__ ((_) (_))_| (_))     ((_)   )\___
  \ \((_)/ /\ \ / / | |_   | |     / _ \  ((/ __|
   \ \/\/ /  \ V /  | __|  | |__  | (_) |  | (__
    \_/\_/    |_|   |_|    |____|  \___/    \___|
```

## Setup

Clone this repo and navigate to the root project directory (which includes a copy of this readme).
Enter the `button` folder and open the `index.html` file in your browser of choice (I highly recommend either FireFox, Chrome, Chromium, or Opera).

To make sure everything is working correctly, click on the run button. If an alert displays with the message "pressed!" you're good to go! You can also test the party button as well.

Make sure you read over the files just to make sure you have a good understanding of their layout and what's inside them.

## Text Editors

Recommended editors:

- Atom editor (highly recommended)
- Light Table
- GEdit
- Sublime

Remember that someone who has never written a line of code isn't going to know what an editor is nor how to use your dvorak keyboard. Therefore, make sure your keyboard is set to QUERTY and has clearly marked key caps. (most laptops cover these requirements)

## Mentor Workflow (Writing their first line of code)

Have them sit down in front of your computer and navigate to the `index.html` or refresh the page if it's already open. Encourage them to click on the red and party buttons. Explain to them that they are going to program the red button to do something cool and interesting (like the party button). Now of course they don't have to use the button but it's a great place to start. For ideas on what they could write, see the suggestions section below.

Have them open up the `main.js` file and explain the code already written for the red button. Examples: This is the bit of code that runs when the red button is pressed. Having them change the text in the alert field is a good way of showing that before they start to write their first line. You can reference to the `index.html` file but we don't want to overwhelm them with too much information. Remember they have most likely never written a single line of code before.

At this point get them to write a line! Remember to keep it simple at first but if time premits, definitely build on their first line.

The easiest way to get setup for the next person is to do a `$ git reset --hard`. If you find that some bit of code is being written over and over again, definitely make a function for it! We want to make it easy for someone to do something cool and interesting. Don't forget to submit a pull request if you think it's a good edition to the project! If there is time we might update the repo during the event so that everyone can benefit from new editions and fixes.

## Project files & layout

In the `button` folder you'll see an `index.html` file and a public folder which contains the css and js files.

### `index.html`

Contains all the bootstrap html and everything else you'd find in a html file.

`lodash` and `jQuery` are included but you don't have to use them. It depends on what you're most familiar with and what will get the job done in the simplest way.

### `main.js`

This is the main js file! At the beginning of the file there is already some code that places an event listener on the run button. Whoever is writing their first line of code can simply modify the `main` function.

Below that you have the party code. If they want and time permits, they can make modifications to the party button.

### `main.css`

All the styles for the page. Nothing much else to say about this file.

### `af_shim.js`

Correctly exposes the `requestAnimationFrame` API for use in older browsers. You don't have to use it but it allows for a dead simple way to create animations without having to use `jQuery` or another animation related library. See the party button code for an example.

## List of code suggestions

Depending on how many people we have wanting to write some code, you can suggest trying more complex things. Ultimately the idea is to get them exposed to programming and get them interested in learning more at home (or maybe through one of our workshops ;P ).

Remember you have the `jQuery` and `lodash` libraries at you're disposal!

- Shrinking cat - make the cat image shrink by a small percentage every time it's pressed (jQuery animate would make this easy)
- Add their name to the page - The next set could be changing it's color or making it animate
- Change the colors of the logo - They're boring colors anyway.
- Hide/Show Cat image - jQuery hide and show methods would do nicely here. Maybe add in an amination!
- Cat afraid of mouse - When clicked on the cat image moves away from the mouse (just shuffles over a few pixels)
- Hungry Cat - Your mouse cursor ... well it's a mouse so the cat could chase after it when it moves! (When the cursor moves have the cat picture move towards it)
