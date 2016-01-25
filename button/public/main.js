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

    Have fun writting your first line of code! :D

***************************************************/

var main = function main () {
  alert('Pressed!');
  // code here! :D
};

var redButton = document.getElementById('red-button');

// Create a event handler for when the red button is clicked
redButton.addEventListener('click', function clickHandler (event) {

  // stops the default event when an <a> element is clicked
  event.preventDefault();

  main();

}, false);
