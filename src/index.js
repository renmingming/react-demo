import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router.js';

ReactDom.render(
	getRouter(), document.getElementById('app'));