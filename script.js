const hamburger = document.querySelector('.top-menu-list');
const burgerMenu = document.querySelector('.nav-menu,.nav-menu-click');
const burgerImg = document.querySelector('.nav-menu-img');
const mainContainer = document.querySelector('.main-container');
const menuIcon = document.querySelector('.icon');

function hamburgerAction() {
  if (hamburger.style.display === 'block') {
    hamburger.style.display = 'none';
    burgerMenu.classList.replace('nav-menu-click', 'nav-menu');
    burgerImg.src = 'img/icon-menu.png';
    mainContainer.style.position = 'relative';
  } else {
    hamburger.style.display = 'block';
    burgerMenu.classList.replace('nav-menu', 'nav-menu-click');
    burgerImg.src = 'img/close.png';
    mainContainer.style.position = 'fixed';
  }
}

menuIcon.addEventListener('click', hamburgerAction);

// -----------Popup Window Section

const workDetails = [
  {
    workId: '1',
    workTitle: 'Multi-Post Stories',
    workImg: 'snapshoot-portfolio.png',
    workDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://kazim110.github.io/',
    projLink: 'https://github.com/kazim110/My-Portfolio-Project',
  },
  {
    workId: '2',
    workTitle: 'Multi-Post Stories',
    workImg: 'snapshoot-portfolio1.png',
    workDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://kazim110.github.io/',
    projLink: 'https://github.com/kazim110/My-Portfolio-Project',
  },
  {
    workId: '3',
    workTitle: 'Stories',
    workImg: 'snapshoot-portfolio2.png',
    workDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://kazim110.github.io/',
    projLink: 'https://github.com/kazim110/My-Portfolio-Project',
  },
  {
    workId: '4',
    workTitle: 'Multi-Post Stories',
    workImg: 'snapshoot-portfolio3.png',
    workDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://kazim110.github.io/',
    projLink: 'https://github.com/kazim110/My-Portfolio-Project',
  },
];

const cards = document.querySelector('.cards');

cards.innerHTML = '';

for (let j = 0; j < workDetails.length; j += 1) {
  let techLang = '';
  workDetails[j].workLanguages.forEach((workLanguages) => {
    techLang = `${techLang}<li>${workLanguages}</li>`;
  });

  cards.innerHTML += `<div class="card">
<img class="work-img" src="./img/${workDetails[j].workImg}" alt="Avatar">
<div class="work-description">
    <div class="work-title">
        <h4 class="work-title-main">${workDetails[j].workTitle}</h4>
        <ul class="work-info">
            <li class="client">
                <p>
                    Canopy
                </p>
            </li>
            <li class="role">
                <p>
                    Back End Dev
                </p>
            </li>
            <li class="year">
                <p>
                    2015
                </p>
            </li>
        </ul>
    </div>
    <div class="work-content-text">
        <p>
          ${workDetails[j].workDesc} 
        </p>
    </div>
    <ul class="work-tech-used">
      ${techLang}
    </ul>
    <div class="action-div">
        <button class="secondary-btn  work-modal-${j}"><p>See Project</p></button>
    </div>
</div>
</div>`;
}

const modal = document.getElementById('myModal');
const modalTitle = document.querySelector('.mod-title');
const span = document.getElementsByClassName('close')[0];

const modalDynamic = document.getElementById('modal-daynamic');


for (let i = 0; i < workDetails.length; i += 1) {
  document.querySelector(`.work-modal-${i}`).addEventListener('click', () => {
    let techLang = '';
    workDetails[i].workLanguages.forEach((workLanguages) => {
      techLang = `${techLang}<li>${workLanguages}</li>`;
    });
    modalTitle.innerHTML = workDetails[i].workTitle;

    modalDynamic.innerHTML ='';
    modalDynamic.innerHTML += `<img class="mod-img" src="./img/${workDetails[i].workImg}" alt="Avatar">
    <div class="mod-desc-content">
    <p class="mod-desc">
    ${workDetails[i].workDesc}
    </p> 
    <div class="mod-lang-btn">
        <ul class="mod-lang work-tech-used">
        ${techLang}
        </ul>
        <div class="btn-contain">
            <button class="btn-mod"><a class="mod-live" href="${workDetails[i].liveLink}">See Live <img src="./img/live.png"></a></button>
            <button class="btn-mod"><a class="mod-source" href="${workDetails[i].projLink}">See Source <img src="./img/git.png"></a></button>
        </div>
    </div>
</div>`;
    modal.style.display = 'flex';
  });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// ---------form validation----------

function formValidation() {
  const INVALID_MESSAGE = 'Please enter a correct email address format';
  const email = document.getElementById('email-input').value;
  const emailRegx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function (event) {
    if (emailRegx.test(email)) {
      document.getElementById('submit-message').style.color = 'green';
      document.getElementById('submit-message').innerHTML = 'Successed!';
    } else {
      document.getElementById('submit-message').style.color = 'red';
      document.getElementById('submit-message').innerHTML = INVALID_MESSAGE;
      event.preventDefault();
    }
  };
}

const formBtn = document.querySelector('.contactme-btn');
formBtn.addEventListener('click', formValidation);