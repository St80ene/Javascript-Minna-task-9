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
