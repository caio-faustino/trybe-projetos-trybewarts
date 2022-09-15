const submitBtn1 = document.querySelector('#submit-btn1');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn2 = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

submitBtn2.disabled = true;

function validation() {
  const trybeEmail = 'tryber@teste.com';
  const trybePassword = '123456';
  if (email.value !== trybeEmail || password.value !== trybePassword) {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function agreementValidation() {
  if (agreement.checked) {
    submitBtn2.disabled = false;
  } else {
    submitBtn2.disabled = true;
  }
}

submitBtn1.addEventListener('click', validation);
agreement.addEventListener('click', agreementValidation);
