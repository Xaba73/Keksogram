import { clearEffect, scaleControlValue, imagePreview, sliderBarContainer  } from './EditionPicture.js';
import { isEscEvent } from './util.js';
const uploadStart = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');


// Загрузка фотографии пользователя для редактирования
function downloadingUsersPicture (){
  uploadFileInput.addEventListener('change', () => {
    uploadStart.classList.remove('hidden');
    body.classList.add('modal-open');
    sliderBarContainer.classList.add('hidden');
  })
}



//Закрытие формы редактирования фотографии

function closeUploadForm() {
  uploadStart.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFileInput.value = null;
  clearEffect();
  scaleControlValue.value = '100%';
  imagePreview.style.transform = 'scale(1)';
}

const closeUploadFormButton = document.querySelector('.img-upload__cancel');

closeUploadFormButton.addEventListener('click', closeUploadForm);
body.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closeUploadForm();
  }

});



export { downloadingUsersPicture };
