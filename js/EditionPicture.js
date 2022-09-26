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
  if (evt.target.classList.contains('scale__control--bigger')) {
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


function clearEffect() {
  imagePreview.className = '';
}

function changePictureEffect(element) {
  clearEffect();
  if (element.classList.contains('effects__preview--none')){
    sliderBarContainer.classList.add('hidden');
  } else {
    sliderBarContainer.classList.remove('hidden');
  }
  console.log(element.classList);
  if (element.classList.contains('effects__preview--none')) {
    imagePreview.classList.add('effects__preview--none');

  }
  if (element.classList.contains('effects__preview--chrome')) {
    imagePreview.classList.add('effects__preview--chrome');
  }
  if (element.classList.contains('effects__preview--sepia')) {
    imagePreview.classList.add('effects__preview--sepia');
  }
  if (element.classList.contains('effects__preview--marvin')) {
    imagePreview.classList.add('effects__preview--marvin');
  }
  if (element.classList.contains('effects__preview--phobos')) {
    imagePreview.classList.add('effects__preview--phobos');
  }
  if (element.classList.contains('effects__preview--heat')) {
    imagePreview.classList.add('effects__preview--heat');
  }
}

//Настройка Слайдера для изображений

const sliderBar = document.querySelector('.effect-level__slider');
const sliderBarContainer = document.querySelector('.img-upload__effect-level');
noUiSlider.create(sliderBar, {
  range: {
    min: 20,
    max: 100,
  },
  start: 50,
  connect: 'lower',
});

export { changeScaleValues, clearEffect, scaleControlValue, imagePreview, sliderBarContainer }
