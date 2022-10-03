const uploadForm = document.querySelector('.img-upload__form');


function submitingForm(closeUploadForm) {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch('https://23.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    ).then(() => closeUploadForm());
  })
}








export { submitingForm }
