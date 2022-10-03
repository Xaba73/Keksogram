import { hashtagsField } from './validation.js';

const uploadForm = document.querySelector('.img-upload__form');
console.log(uploadForm);

function submitingForm(){
  uploadForm.addEventListener('submit', (evt) => {
    if(hashtagsField){
      console.log(hashtagsField)
    }
    evt.preventDefault();
    console.log('click')
  })
}








export {submitingForm}
