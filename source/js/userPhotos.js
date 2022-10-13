const fileChooser = document.querySelector('#upload-file');
const previewPhoto = document.querySelector('.img-upload__preview > img');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png']

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
  if(matches){
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      previewPhoto.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
})
