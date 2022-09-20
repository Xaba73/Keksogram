import { addPhotoDescriptions } from './photo-data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const photosDate = addPhotoDescriptions();

function fillingPictureDate(photoObject) {
  const userPicture = templatePicture.cloneNode(true);
  userPicture.querySelector('.picture__img').src = photoObject.url;
  userPicture.querySelector('.picture__likes').textContent = photoObject.likes;
  userPicture.querySelector('.picture__comments').textContent = photoObject.comments.length;
  userPicture.comments = photoObject.comments;
  userPicture.description = photoObject.description;
  return userPicture;
}

function renderPictures() {
  let picture = document.createDocumentFragment();

  photosDate.forEach((photo) => {
    picture.appendChild(fillingPictureDate(photo));
  });
  picturesContainer.appendChild(picture);
}

export { renderPictures, photosDate };




