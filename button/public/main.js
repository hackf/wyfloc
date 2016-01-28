/***************************************************
                 )   (      (         )
   (  (       ( /(   )\ )   )\ )   ( /(      (
   )\))(   '  )\()) (()/(  (()/(   )\())     )\
  ((_)()\ )  ((_)\   /(_))  /(_)) ((_)\    (((_)
  _(())\_)()__ ((_) (_))_| (_))     ((_)   )\___
  \ \((_)/ /\ \ / / | |_   | |     / _ \  ((/ __|
   \ \/\/ /  \ V /  | __|  | |__  | (_) |  | (__
    \_/\_/    |_|   |_|    |____|  \___/    \___|


    Main Javascript File
    ====================

    Have fun writing your first line of code! :D

***************************************************/

var main = function main () {
  // remove the alert ;P
  alert('Pressed!');
  // write your first line of code here! :D
};

var redButton = document.getElementById('red-button');

// Create an event handler for when the red button is clicked
redButton.addEventListener('click', function clickHandler (event) {

  // stops the default event when an <a> element is clicked
  event.preventDefault();

  main();

}, false);

/***************************************************
      ___    ___     ___    _____  __   __ 
     | _ \  /   \   | _ \  |_   _| \ \ / / 
     |  _/  | - |   |   /    | |    \ V /  
    _|_|_   |_|_|   |_|_\   _|_|_   _|_|_  
  _| """ |_|"""""|_|"""""|_|"""""|_| """ | 
  "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 

    Party Button code example!
    ==========================

    Add moar PARTY!

***************************************************/

(function () {

  var partyButton = document.getElementById('party-button');

  var Party = function Party () {
    this.started = false;
    this._colors = [
      '#FF0000',
      '#FF7F00',
      '#FFFF00',
      '#00FF00',
      '#0000FF',
      '#4B0082',
      '#8B00FF'
    ];
    this._currentColor = 0;
    this._rotateDeg = 0;
  };

  /**
   * Cycles through the colors in the `this._colors` array.
   *
   * Every time this method is called it'll return the next color in the
   * array, starting with the first. 
   **/
  Party.prototype.getColor = function getColor () {

    // If the current color number is larger than the amount of colors
    // we have in the color array, start back at the beginning.
    if (this._currentColor > this._colors.length - 1) {
      this._currentColor = 0;
    }

    var previousColor = this._currentColor;
    this._currentColor += 1;
    return this._colors[previousColor];
  };

  /**
   * Runs the party code! Animates the cat image and colors the ascii logo at
   * the top of the page.
   **/
  Party.prototype.start = function start () {
    this.started = true;

    partyButton.text = 'Stop :(';

    // grab the pre.logo elements. Each element is a single row.
    // Note: the order is top down
    var asciiRows = document.querySelectorAll('pre.logo');

    // iterate over the rows and change the text color plus add a shadow
    // to the text to give it a neon look.
    _.forEach(asciiRows, _.bind(function forEach (element) {
      var color = this.getColor();
      element.style.color = color;
      element.style['text-shadow'] = '0px 0px 7px ' + color;
    }, this));

    var catImage = document.querySelector('.cat');

    catImage.style['transform'] = 'rotate(' + this._rotateDeg + 'deg)';
    this._rotateDeg += 1;
    
    // We don't want our number to get too big! Since we only care about 360
    // degs we'll cap it at that. Note that 0 and 360 degs are the same
    // position in the circle.
    if (this._rotateDeg > 360) {
      this._rotateDeg = 0;
    }

    // This is what controls the animation. The browser will call our `start`
    // method about 60 times a second. Each time it's called, new colors will
    // be assigned to the ascii rows and the cat image's rotation will be
    // increased by 5 degs. This is what makes it appear to move.
    // `this._afId` is an id that we can use later to stop the animation.
    this._afId = window.requestAnimationFrame(_.bind(this.start, this));
  };

  Party.prototype.stop = function stop () {
    this.started = false;

    partyButton.text = 'Party!';

    window.cancelAnimationFrame(this._afId);
  };

  var party = new Party();

  // Create an event handler for when the red button is clicked
  partyButton.addEventListener('click', function clickHandler (event) {

    // stops the default event when an <a> element is clicked
    event.preventDefault();

    if (party.started === false) {
      party.start();
    } else {
      party.stop();
    }

  }, false);

  /**
   * Centers the given element in it's parent.
   * In our case it'll center the cat image in the grey box that surrounds it.
   **/
  var centerElement = function centerElement (element) {
    var parent = element.parentNode,
        parentHeight = parent.clientHeight,
        parentWidth = parent.clientWidth,
        elementHeight = element.clientHeight,
        elementWidth = element.clientWidth,
        top = 0,
        left = 0;

    top += parentHeight - elementHeight;
    top = top - top / 2;

    left += parentWidth - elementWidth;
    left = left - left / 2;

    element.style.top = top + 'px';
    element.style.left = left + 'px';
  };

  var catImage = document.querySelector('.cat');

  centerElement(catImage);

})();
