'use strict';

import { downloadingUsersPicture } from './uploadPucture.js';
import { changeScaleValues } from './EditionPicture.js';
import { validation } from './validation.js';
import './renderFromServer.js';
import {submitingForm} from './submissionForm.js';

downloadingUsersPicture();
changeScaleValues();
validation();
submitingForm();
