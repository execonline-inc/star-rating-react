import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './../dist/index.js';

ReactDOM.render(
  <StarRating
    size={5}
    value={3}
    onChange={function(val){console.log(val)}}
  />,
  document.querySelector('#app')
);
