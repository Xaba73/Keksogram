'use strict';
import { addPhotoDescriptions } from './photo-data.js';
import { renderPictures } from './pictures.js';
import { downloadingUsersPicture } from './uploadPucture.js';
import { changeScaleValues } from './EditionPicture.js';
import {validation} from './validation.js';

renderPictures();
downloadingUsersPicture();
changeScaleValues();

