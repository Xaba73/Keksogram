import { isEscEvent } from './util.js';
const uploadForm = document.querySelector('.img-upload__form');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

function submitingForm(closeUploadForm, showSuccessMessage, showErrorMessage) {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch('https://23.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    ).then(function (response) {
      closeUploadForm();
      if (response.ok) {
        showSuccessMessage();
      } else {
        showErrorMessage();
      }
    })
  });
}


function showSuccessMessage() {
  const successMessage = successTemplate.cloneNode(true);
  document.body.append(successMessage);
  const closeButton = successMessage.querySelector('.success__button')
  deleteMessage(successMessage, closeButton, isEscEvent)
}

function showErrorMessage() {
  const errorMessage = errorTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const closeButton = errorMessage.querySelector('.error__button');
  deleteMessage(errorMessage, closeButton, isEscEvent);
}

//Обработчики закрытия форм
function deleteMessage(message, button) {
  document.body.addEventListener('click', (evt) => {
    if (evt.target === message) {
      message.remove();
    }
  })

  document.body.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      message.remove();
    }
  })

  button.addEventListener('click', () => {
    message.remove();
  })
}


export { submitingForm, showSuccessMessage, showErrorMessage }
