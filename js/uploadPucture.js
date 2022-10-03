import { clearEffect, scaleControlValue, imagePreview, sliderBarContainer } from './EditionPicture.js';
import { isEscEvent } from './util.js';
import { hashtagsField, commentField } from './validation.js';
const uploadStart = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');


// Загрузка фотографии пользователя для редактирования
function downloadingUsersPicture() {
  uploadFileInput.addEventListener('change', () => {
    uploadStart.classList.remove('hidden');
    body.classList.add('modal-open');
    sliderBarContainer.classList.add('hidden');
  })
}



//Закрытие формы редактирования фотографии
const closeUploadFormButton = document.querySelector('.img-upload__cancel');

function closeUploadForm() {
  uploadStart.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFileInput.value = null;
  clearEffect();
  scaleControlValue.value = '1';
  imagePreview.style.transform = 'scale(1)';
  hashtagsField.value = '';
  commentField.value = '';

}
function closeUploadFormOnEsc(evt) {
  if (isEscEvent(evt)) {
    closeUploadForm();
  }
}

closeUploadFormButton.addEventListener('click', closeUploadForm);
body.addEventListener('keydown', closeUploadFormOnEsc);



export { downloadingUsersPicture, closeUploadFormOnEsc, body, closeUploadForm };
