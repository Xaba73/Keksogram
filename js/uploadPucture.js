import { isEscEvent } from './util.js';
const uploadStart = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');


// Загрузка фотографии пользователя для редактирования
uploadFileInput.addEventListener('change', () => {
  uploadStart.classList.remove('hidden');
  body.classList.add('modal-open');
})


//Закрытие формы редактирования фотографии
function closeUploadForm() {
  uploadStart.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFileInput.value = null;
}

const closeUploadFormButton = document.querySelector('.img-upload__cancel');

closeUploadFormButton.addEventListener('click', closeUploadForm);
body.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closeUploadForm();
  }

});



export { uploadFileInput };
