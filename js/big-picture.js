import { isEscEvent } from './util.js';
const bigPictureSection = document.querySelector('.big-picture')
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img').querySelector('img');
const likeCountBigPicture = document.querySelector('.likes-count');
const commentsCountBigPicture = document.querySelector('.comments-count');
const socialCaptionBigBicture = document.querySelector('.social__caption');
const bigPictureDiv = document.querySelector('.big-picture__social');
const commentsContainer = bigPictureDiv.querySelector('.social__comments');
const body = document.querySelector('body');
const showedComments = document.querySelector('.social__comments-count--showed');
const commentLoader = document.querySelector('.comments-loader');
const COMMENTS_COUNT = {
  Start: 5,
  Step: 5,
}

// Заменяет большое изображение и все данные к нему

function renderBigPicture() {
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
      showedComments.textContent = COMMENTS_COUNT.Start;
      if(picture.comments.length < COMMENTS_COUNT.Start){
        showedComments.textContent = picture.comments.length;
      }
      renderComment(picture.comments);
      body.classList.add('modal-open');
    });

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
  let firstCommentArray = commentsArray.slice(0, COMMENTS_COUNT.Start);
  renderPartComment(firstCommentArray);
  let commentCountStart = COMMENTS_COUNT.Start;
  let commentCountStep = COMMENTS_COUNT.Step;
  commentLoader.addEventListener ('click', () => {
    let afterLoadCommentArray  = commentsArray.slice(commentCountStart, commentCountStart + commentCountStep);
    renderPartComment(afterLoadCommentArray);
    commentCountStart += commentCountStep;
    let commentsCounter = document.querySelectorAll('.social__comment');
    showedComments.textContent = commentsCounter.length;
  });

}

// commentLoader.addEventListener ('click', () => {
//   let afterLoadCommentArray  = commentsArray.slice(commentCountStart, commentCountStart + commentCountStep);
//   renderPartComment(afterLoadCommentArray);
//   commentCountStart += commentCountStep;
//   let commentsCounter = document.querySelectorAll('.social__comment');
//   showedComments.textContent = commentsCounter.length;
//   console.log('123');
// });

function renderPartComment(commentArray){
  commentArray.forEach(comment => {
    let userCommentValue = makeComment(comment);
    commentsContainer.appendChild(userCommentValue);
  });
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

export { renderBigPicture }
