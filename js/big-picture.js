import { isEscEvent } from './util.js';
const bigPictureSection = document.querySelector('.big-picture')
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img').querySelector('img');
const likeCountBigPicture = document.querySelector('.likes-count');
const commentsCountBigPicture = document.querySelector('.comments-count');
const socialCaptionBigBicture = document.querySelector('.social__caption');
const commentsContainer = document.querySelector('.big-picture__social').querySelector('.social__comments');
const body = document.querySelector('body');



// Скрыть лишние элементы
const userCommentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
userCommentCount.classList.add('hidden');
commentLoader.classList.add('hidden');

// Заменяет большое изображение и все данные к нему

function renderBigPicture (){
  let pictures = document.querySelectorAll('a.picture')
  pictures.forEach((picture) => {

    let userPicture = picture.querySelector('img');
    let likesNumber = picture.querySelector('.picture__likes');
    let commentsCount = picture.querySelector('.picture__comments');


    userPicture.addEventListener('click', (evt) => {
      evt.preventDefault();
      bigPictureSection.classList.remove('hidden');
      bigPictureImg.src = userPicture.src;
      likeCountBigPicture.textContent = likesNumber.textContent;
      commentsCountBigPicture.textContent = commentsCount.textContent;
      socialCaptionBigBicture.textContent = picture.description;
      renderComment(picture.comments);
      body.classList.add('modal-open');
    })
  })
}


// Фуннкция составляет комментарий
function makeComment(commentObject) {
  const commentTemplate = document.querySelector('#comment').content;
  let userComment = commentTemplate.cloneNode(true);

  let userAvatar = userComment.querySelector('.social__picture');
  let userText = userComment.querySelector('.social__text');

  userAvatar.src = commentObject.avatar;
  userAvatar.alt = commentObject.name;
  userText.textContent = commentObject.message;

  return (userComment);
}

//Функция отображает комментарии под большим фото
function renderComment(commentsArray) {
  commentsArray.forEach(comment => {
    let userCommentValue = makeComment(comment);
    commentsContainer.appendChild(userCommentValue);
  })
}

//Закрытие большого окна кнопкой

function closeBigPucture() {
  bigPictureSection.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsContainer.innerHTML = '';
}

const closeButton = bigPictureSection.querySelector('.big-picture__cancel');
closeButton.addEventListener('click', closeBigPucture)

body.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closeBigPucture();
  }
})

export {renderBigPicture}
