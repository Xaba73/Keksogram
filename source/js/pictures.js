import { renderBigPicture } from './big-picture.js';
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

function fillingPictureDate(photoObject) {
  const userPicture = templatePicture.cloneNode(true);
  userPicture.querySelector('.picture__img').src = photoObject.url;
  userPicture.querySelector('.picture__likes').textContent = photoObject.likes;
  userPicture.querySelector('.picture__comments').textContent = photoObject.comments.length;
  userPicture.comments = photoObject.comments;
  userPicture.description = photoObject.description;
  return userPicture;
}

function renderPictures(serverPhotoDate) {
  let picture = document.createDocumentFragment();

  serverPhotoDate.forEach((photo) => {
    picture.appendChild(fillingPictureDate(photo));
  });
  picturesContainer.appendChild(picture);
  renderBigPicture();
}

export { renderPictures };




