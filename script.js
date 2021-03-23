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
/* 
function inserirTarefa() {
  let listaOrde = document.getElementById("lista-tarefas");
  let itemNovo = document.createElement("li")
  itemNovo.innerHTML = document.getElementById('texto-tarefa').value;
  listaOrde.appendChild(itemNovo).classList.add('itens');
  document.getElementById('texto-tarefa').value = "";
}

let quadro = document.getElementsByClassName('pixel');
for (let quadroIndex = 0; quadroIndex < quadro.length; quadroIndex += 1) {
  quadro[quadroIndex].addEventListener('click', function cores (event) {
    if (document.getElementsByClassName('color')[0].classList.contains('selected')) {
      event.target.style.background = 'black';
    }
    if (document.getElementsByClassName('color')[1].classList.contains('selected')) {
      event.target.style.background = 'red';
    }
    if (document.getElementsByClassName('color')[2].classList.contains('selected')) {
      event.target.style.background = 'blue';
    }
    if (document.getElementsByClassName('color')[3].classList.contains('selected')) {
      event.target.style.background = 'green';
    }
  })
}
 */