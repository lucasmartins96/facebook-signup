function addEventButton() {
  const buttonLogin = document.getElementById('button-login');
  buttonLogin.addEventListener('click', () => {
    const inputValue = document.getElementById('user-email-phone').value;
    alert(inputValue);
  });
}
addEventButton();

function isEmpty(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].value === '') {
      return true;
    }
  }
  return false;
}

function isChecked(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked === true) {
      return true;
    }
  }
  return false;
}

function checkInputs(event) {
  event.preventDefault();
  const inpTex = document.querySelectorAll('.form-cadastro input[type="text"]');
  const inpPw = document.querySelector('.form-cadastro input[type="password"]');
  const inpRd = document.querySelectorAll('.radio input[type="radio"]');
  const span = document.querySelector('span');
  if (isEmpty(inpTex) || inpPw.value === '' || !isChecked(inpRd)) {
    span.innerText = 'Campos inválidos';
  } else {
    span.innerText = '';
  }
}

const submitButton = document.getElementById('facebook-register');
submitButton.addEventListener('click', checkInputs);

const radios = document.querySelector('.radio');
const generoInput = document.getElementById('genero');
radios.addEventListener('click', (event) => {
  const idTarget = event.target.id;
  if (idTarget !== 'personalizado') {
    generoInput.style.display = 'none';
    generoInput.type = 'hidden';
  } else {
    generoInput.style.display = 'block';
    generoInput.type = 'text';
  }
});
