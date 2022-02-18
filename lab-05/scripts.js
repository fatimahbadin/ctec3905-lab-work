"use strict";

// changes the size of the box on the right
myHeight.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});

// changes the background colour of the section
myBG.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--bg-colour', myBG.value);
});

// changed the Foreground/text of the section
myFG.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--fg-colour', myFG.value);
});

// checks to see if the confirm pw matches the first pw
const checkConfirmation = (ev) => {
  if (myPassword.value != myConfirmation.value) {
    myConfirmation.setCustomValidity("Wait. What? This doesn't match the password field!");
  } else {
    myConfirmation.setCustomValidity('');
  }
};

// uses the above variable/if statement to check the pw match
myConfirmation.addEventListener('input', checkConfirmation);
myPassword.addEventListener('input', checkConfirmation);

// pop up message appears after clicking submit, saying logged in as ...
login.addEventListener('submit', ev => {
  alert(`logged in as ${myUser.value}`)
  login.reset();

  // prevents the pw being in the url
  ev.preventDefault();
});

const article = document.querySelector('#electric-cars');
// following could also work
// const article = document.getElementById("electric-cars")

article.dataset.columns //"3"
article.dataset.indexNumber //"12314"
article.dataset.parent //"cars"
