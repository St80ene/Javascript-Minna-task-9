//toggling the navbar
function toggleFunction() {
  let x = document.getElementById('toggle-nav');
  let y = document.getElementById('mobile-nav');
  if (x.style.display === 'none') {
    y.style.display = 'block';
  } else {
    x.style.display = 'none';
    y.style.display = 'block';
  }
}

function toggleClose() {
  let x = document.getElementById('toggle-nav');
  let y = document.getElementById('mobile-nav');
  if (y.style.display === 'none') {
    x.style.display = 'block';
  } else {
    y.style.display = 'none';
    x.style.display = 'block';
  }
}

function openPage(pageName) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  // Show the specific tab content
  document.getElementById(pageName).style.display = 'block';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

//Cards
const cardContents = [
  {
    cardLogo: '../../images/logo-chrome.svg',
    cardTitle: 'Add to Chrome',
    cardText: 'Minimum version 62',
  },
  {
    cardLogo: '../../images/logo-firefox.svg',
    cardTitle: 'Add to Firefox',
    cardText: 'Minimum version 55',
  },
  {
    cardLogo: '../../images/logo-opera.svg',
    cardTitle: 'Add to Opera',
    cardText: 'Minimum version 46',
  },
];

const generateCards = (cardLogo, cardTitle, cardText) => `<div class="card-img">
<img class="card-logo" src="${cardLogo}" alt="" />
<h3 class="card-title">${cardTitle}</h3>
<p class="card-text">${cardText}</p>
<div class="dotted">
  <img src="./images/bg-dots.svg" alt="" />
</div>
<button class="card-button">Add & Install Extension</button>
</div>`;

const displayCards = () => {
  let cardSets = '';
  for (let i = 0; i < cardContents.length; i++) {
    const card = generateCards(
      cardContents[i].cardLogo,
      cardContents[i].cardTitle,
      cardContents[i].cardText
    );
    cardSets += card;
  }
  document.getElementById('card-container').innerHTML = cardSets;
};

/**Displays cards after Browser loads*/
window.onload = function () {
  displayCards();
};

//Accordion functionality
let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

//email validation
const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();
});

const checkInput = () => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    email;
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement; //get the form control
  const small = formControl.querySelector('small');

  //add error message
  small.innerText = message;

  //add error class
  formControl.className = 'sign-letter error';
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
