import { closeUploadFormOnEsc, body } from './uploadPucture.js';
const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const regularExpressionHashtags = /^[а-яА-ЯёЁa-zA-Z0-9#]+$/;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_COUNT = 5;

function validation() {
  hashtagsField.addEventListener('focus', () => {
    body.removeEventListener('keydown', closeUploadFormOnEsc);
  })
  //Валидация хэштегов
  hashtagsField.addEventListener('input', () => {
    hashtagsField.setCustomValidity('');
    let inputText = hashtagsField.value.toLowerCase().trim();

    if (!inputText) {
      return;
    }

    let inputArray = inputText.split(' ');
    let inputArrayStacked = inputArray.filter(element => element !== '');

    inputArrayStacked.forEach(element => {
      if (element[0] != '#') {
        hashtagsField.setCustomValidity('Хэштег должен начинаться со знака #');
      }
      if (element === '#') {
        hashtagsField.setCustomValidity('Хэштег не может состоять только из знака #');
      }
      if (!regularExpressionHashtags.test(element)) {
        hashtagsField.setCustomValidity('Хэштег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.) символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
      }
      if (element.length >= MAX_HASHTAG_LENGTH) {
        hashtagsField.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку')
      }
      if (element.indexOf('#', 1) !== -1) {
        hashtagsField.setCustomValidity('Хэш-теги должны разделятся пробелами');
      }
    });
    if (inputArrayStacked.length > MAX_HASHTAG_COUNT) {
      hashtagsField.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
    }

    hashtagsField.reportValidity();

  })

  //Проверка ну дубликаты хэштегов при потере фокуса
  hashtagsField.addEventListener('blur', () => {
    let inputArrayStacked = hashtagsField.value.toLowerCase().trim().split(' ').filter(element => element !== '');
    uniquHashtagCheck(inputArrayStacked);
    hashtagsField.reportValidity();
    body.addEventListener('keydown', closeUploadFormOnEsc);
  })

  validationComment();
}

function uniquHashtagCheck(inputArrayStacked) {
  let hashtagSet = new Set(inputArrayStacked);
  if (Array.from(hashtagSet).length !== inputArrayStacked.length) {
    hashtagsField.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
  }
}

function validationComment() {
  commentField.addEventListener('focus', () => {
    body.removeEventListener('keydown', closeUploadFormOnEsc);
  })
  commentField.addEventListener('blur', () => {
    body.addEventListener('keydown', closeUploadFormOnEsc);
  })
}

export { validation, hashtagsField, commentField };
