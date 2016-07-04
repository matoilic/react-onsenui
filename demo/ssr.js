global.navigator = {
  userAgent: 'test'
};

global.window = {
  addEventListener: () => {},
  Event: {},
  getComputedStyle: () => []
};

global.self = {
};

global.document = {
  createElement: () => {},
  createElementNS: () => {},
};



global.Node = {
  prototype: {}
};

global.Element = {
    prototype: {}
};


console.log(navigator);

import {Page} from '../src/index.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
//import '../OnsenUI/build/js/onsenui.js';
require('onsenui');

ReactDOMServer.renderToString(<Page />);
