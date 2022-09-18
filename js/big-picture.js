const bigPictureSection = document.querySelector('.big-picture')
const bigPictureImg = bigPictureSection.querySelector('.big-picture__img').querySelector('img');
const pictures = document.querySelectorAll('.picture');
const likeCountBigPicture = document.querySelector('.likes-count');
const commentsCountBigPicture = document.querySelector('.comments-count')

// Заменяет большое изображение и все данные к нему
pictures.forEach((picture) => {

  let userPicture = picture.querySelector('img');
  let likesNumber = picture.querySelector('.picture__likes');
  let commentsCount = picture.querySelector('.picture__comments');

  userPicture.addEventListener('click', () => {
    bigPictureSection.classList.remove('hidden');
    bigPictureImg.src = userPicture.src;
    likeCountBigPicture.textContent = likesNumber.textContent;
    commentsCountBigPicture.textContent = commentsCount.textContent;
  })
})
