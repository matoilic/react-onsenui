global.navigator = {
  userAgent: 'test'
};

console.log(navigator);

import {Page} from '../src/index.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import '../OnsenUI/build/js/onsenui.js';

ReactDOMServer.renderToString(<Page />);
