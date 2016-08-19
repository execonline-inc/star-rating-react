import React from 'react';
import StarRating from './index.jsx';
import style from './index.css';
import test from 'ava';
import { shallow } from 'enzyme';

test('root tag is an input', t => {
  const wrapper = shallow(<StarRating />);
  t.is(wrapper.type(), 'span');
});

test('root class is applied', t => {
  const wrapper = shallow(<StarRating />);
  t.true(wrapper.hasClass(style.root));
});
