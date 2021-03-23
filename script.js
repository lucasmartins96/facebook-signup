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

function checkInputs(event) {
  event.preventDefault();
  const inputsTexts = document.querySelectorAll('.form-cadastro input[type="text"]');
  const inputPswd = document.querySelector('.form-cadastro input[type="password"]');
  const span = document.querySelector('span');
  if (isEmpty(inputsTexts) || inputPswd.value === '') {
    span.innerText = 'Campos inválidos';
  } else {
    span.innerText = '';
  }
}

const submitButton = document.getElementById('facebook-register');
submitButton.addEventListener('click', checkInputs);
