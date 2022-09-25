const ScaleValues = {
  MIN: 25,
  STEP: 25,
  MAX: 100,
}
const scaleControlButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleControlButtonBigger = document.querySelector('.scale__control--bigger');
let scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview > img');

// Изменение масштаба картинки

function changeScaleValue(evt) {
  let scale;
  if (evt.path[0].classList.contains('scale__control--bigger')) {
    scale = parseInt(scaleControlValue.value, 10) + ScaleValues.STEP;
  } else {
    scale = parseInt(scaleControlValue.value, 10) - ScaleValues.STEP
  }

  if (scale >= ScaleValues.MAX) {
    scale = ScaleValues.MAX;
  } else if (scale <= ScaleValues.MIN) {
    scale = ScaleValues.MIN;
  }
  scaleControlValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = `scale(${scale})`;
}


function changeScaleValues() {
  scaleControlButtonSmaller.addEventListener('click', (evt) => {
    changeScaleValue(evt);
  });

  scaleControlButtonBigger.addEventListener('click', (evt) => {
    changeScaleValue(evt);
  })
}

// Наложение эффекта на изображение


const effectsList = document.querySelector('.effects__list');
const spanList = effectsList.querySelectorAll('.effects__preview');

spanList.forEach((element) => {
  element.addEventListener('click', () => {
    changePictureEffect(element);
  });
})


// effectsList.addEventListener('click', (evt) => {
//   let target = evt.target.querySelector('.effects__preview');
//   console.log(target);
//   changePictureEffect(target);
// });
function clearEffect() {
  imagePreview.className = '';
}

function changePictureEffect(element) {
  if (element.classList.contains('effects__preview--none')) {
    clearEffect();
    imagePreview.classList.add('effects__preview--none');
  }
  if (element.classList.contains('effects__preview--chrome')) {
    clearEffect();
    imagePreview.classList.add('effects__preview--chrome');
  }
  if (element.classList.contains('effects__preview--sepia')) {
    clearEffect();
    imagePreview.classList.add('effects__preview--sepia');
  }
  if (element.classList.contains('effects__preview--marvin')) {
    clearEffect();
    imagePreview.classList.add('effects__preview--marvin');
  }
  if (element.classList.contains('effects__preview--phobos')) {
    clearEffect();
    imagePreview.classList.add('effects__preview--phobos');
  }
  if (element.classList.contains('effects__preview--heat')) {
    clearEffect();
    imagePreview.classList.add('effects__preview--heat');
  }
}


// let chromeEffectButton = document.querySelector('#effect-chrome');
// chromeEffectButton.addEventListener('change', () => {
//   imagePreview.classList.add(`effects__preview--${effects.CHROME}`);
// })
export { changeScaleValues }
