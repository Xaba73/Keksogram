const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');


function validation(){}

hashtagsField.addEventListener('input', ()=> {
  hashtagsField.setCustomValidity('');
  let inputText = hashtagsField.value.toLowerCase().trim();

  if (!inputText){
    return;
  }
  let inputArray = inputText.split(' ');

  let inputArrayStacked = inputArray.filter(element => element !== '');

  inputArrayStacked.forEach(element => {
    if (element[0] != '#'){
      hashtagsField.setCustomValidity('Хэштег должен начинаться со значка #');
    }

    if (element === '#'){
      hashtagsField.setCustomValidity('Хэштег не может состоять только из значка #');
    }
  });

  hashtagsField.reportValidity();

})

export {validation}
