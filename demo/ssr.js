global.navigator = {
  userAgent: 'test'
};

import 'onsenui';
import {Page} from '../src/index.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import '../OnsenUI/build/js/onsenui.js';



ReactDOMServer.renderToString(<Page />);
