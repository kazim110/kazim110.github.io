// --------local storage
const storageKey = 'contactFormLocalData';
const formName = document.querySelector('#name-input');
const formEmail = document.querySelector('#email-input');
const formMsg = document.querySelector('#text-area');
const formFields = document.querySelectorAll('.input-field');

function loadFromLocalData() {
  const dataLoaded = JSON.parse(localStorage.getItem(storageKey));
  formName.value = dataLoaded.name;
  formEmail.value = dataLoaded.email;
  formMsg.value = dataLoaded.msg;
}

function saveLocalData() {
  const savedData = {
    name: formName.value,
    email: formEmail.value,
    msg: formMsg.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(savedData));
}

window.onload = () => {
  loadFromLocalData();
};

formFields.forEach((field) => {
  field.addEventListener('change', () => {
    saveLocalData();
  });
});