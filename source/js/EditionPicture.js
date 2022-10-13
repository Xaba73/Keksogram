const ScaleValues = {
  MIN: 25,
  STEP: 25,
  MAX: 100,
}

const EffectsMethods = {
  CHROME: () => {
    returnDefaultSlider();
    imagePreview.classList.add('effects__preview--chrome');
    sliderBar.noUiSlider.on('update', (_, handel, unencoded) => {
      sliderEffectLevel.value = unencoded[handel];
      imagePreview.style.filter = `grayscale(${sliderEffectLevel.value})`;
    });
  },

  SEPIA: () => {
    returnDefaultSlider();
    imagePreview.classList.add('effects__preview--sepia');
    sliderBar.noUiSlider.on('update', (_, handel, unencoded) => {
      sliderEffectLevel.value = unencoded[handel];
      imagePreview.style.filter = `sepia(${sliderEffectLevel.value})`;
    });
  },

  MARVIN: () => {
    imagePreview.classList.add('effects__preview--marvin');
    sliderBar.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    sliderBar.noUiSlider.on('update', (_, handel, unencoded) => {
      sliderEffectLevel.value = unencoded[handel];
      imagePreview.style.filter = `invert(${sliderEffectLevel.value}%)`;
    });
  },

  PHOBOS: () => {
    imagePreview.classList.add('effects__preview--phobos');
    sliderBar.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderBar.noUiSlider.on('update', (_, handel, unencoded) => {
      sliderEffectLevel.value = unencoded[handel];
      imagePreview.style.filter = `blur(${sliderEffectLevel.value}px)`;
    });
  },

  HEAT: () => {
    imagePreview.classList.add('effects__preview--heat');
    sliderBar.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderBar.noUiSlider.on('update', (_, handel, unencoded) => {
      sliderEffectLevel.value = unencoded[handel];
      imagePreview.style.filter = `brightness(${sliderEffectLevel.value})`;
    });
  },
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
  imagePreview.style.filter = '';
}

function changePictureEffect(element) {
  clearEffect();

  if (element.classList.contains('effects__preview--none')) {
    sliderBarContainer.classList.add('hidden');
  } else {
    sliderBarContainer.classList.remove('hidden');
  }

  if (element.classList.contains('effects__preview--none')) {
    clearEffect();
  }

  if (element.classList.contains('effects__preview--chrome')) {
    EffectsMethods.CHROME();
  }

  if (element.classList.contains('effects__preview--sepia')) {
    EffectsMethods.SEPIA();
  }

  if (element.classList.contains('effects__preview--marvin')) {
    EffectsMethods.MARVIN();
  }

  if (element.classList.contains('effects__preview--phobos')) {
    EffectsMethods.PHOBOS();
  }

  if (element.classList.contains('effects__preview--heat')) {
    EffectsMethods.HEAT();
  }
}

//Настройка Слайдера для изображений

const sliderBar = document.querySelector('.effect-level__slider');
const sliderBarContainer = document.querySelector('.img-upload__effect-level');
const sliderEffectLevel = document.querySelector('.effect-level__value');


window.noUiSlider.create(sliderBar, {
  range: {
    min: 0,
    max: 1,
  },
  step: 0.1,
  start: 1,
  connect: 'lower',
});


function returnDefaultSlider() {
  sliderBar.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  })
}

export { changeScaleValues, clearEffect, scaleControlValue, imagePreview, sliderBarContainer }
