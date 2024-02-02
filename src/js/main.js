var Promise = require('es6-promise-polyfill').Promise;
import 'nodelist-foreach-polyfill';

import modals from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
});