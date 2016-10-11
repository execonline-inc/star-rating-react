import React from 'react';
import StarRating from './../index.jsx';
import style from './../index.css';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'

describe('<StarRating />', () => {
  describe('props', () =>{
    describe('size', () =>{
      it('exists', function () {
        const wrapper = mount(
          <StarRating
            size={5}
          />
        );
        expect(wrapper.props().size).to.eq(5);
      });
      it("defaults to 5", () => {
        const wrapper = mount(
          <StarRating
          />
        );
        expect(wrapper.props().size).to.eq(5);
      });
    })
    describe('value', () =>{
      it("exists", () => {
        const wrapper = mount(
          <StarRating
            value={3}
          />
        );
        expect(wrapper.props().value).to.eq(3)
      });
    });
    describe('onChange', () =>{
      it("exists", () => {
        const wrapper = mount(
          <StarRating
            onChange={() => {}}
          />
        );
        expect(wrapper.props().onChange).to.exist
      });
    });
  })
  describe('state', () =>{
    describe('hoverCount', () =>{
      it('exists', function () {
        const wrapper = mount(
          <StarRating
          />
        );
        expect(wrapper.state().hoverCount).to.exist;
      });

      it('defaults to 0', function () {
        const wrapper = mount(
          <StarRating
          />
        );
        expect(wrapper.state().hoverCount).to.eq(0);
      });
    })
  })
  it('renders correct number of stars specified by the \'size\' property', function () {
    const wrapper = mount(
      <StarRating
        size={5}
        value={3}
        onChange={() => {}}
      />
    );
    expect(wrapper.find(`.${style['star']}`).length).to.eq(5);
  });
  it(`renders enabled stars for the value property you pass`, function () {
    const wrapper = mount(
      <StarRating
        size={5}
        value={3}
        onChange={() => {}}
      />
    );
    expect(wrapper.find(`.${style['star--enabled']}`).length).to.eq(3);
  });
  it(`renders disabled stars for the remaining stars above the value you pass`, function () {
    const wrapper = mount(
      <StarRating
        size={5}
        value={3}
        onChange={() => {}}
      />
    );
    expect(wrapper.find(`.${style['star--disabled']}`).length).to.eq(2);
  });
  it ('root tag is an input', () => {
    const wrapper = shallow(<StarRating />);
    expect(wrapper.type()).to.eq('div');
  })
  it ('root class is applied', () => {
    const wrapper = shallow(<StarRating />);
    expect(wrapper.hasClass(style.root)).to.be.true
  })
  describe('when a user hovers on a star', () => {
    describe('when user leaves the hover space of a star without clicking', () => {
      it('the handler function passed to props doesnt get called', () => {
        const onChange = sinon.spy();
        const wrapper = mount(
          <StarRating
            size={5}
            value={3}
            onChange={() => {}}
          />
        );
        let star = wrapper.find(`.${style['star']}`).at(4)
        star.simulate('mouseEnter')
        star.simulate('mouseLeave')
        expect(onChange.calledOnce).to.be.false
      })
    })
    it('star hovered over and all stars before are enabled', () => {
      const wrapper = mount(
        <StarRating
          size={5}
          value={3}
          onChange={() => {}}
        />
      );
      let star = wrapper.find(`.${style['star']}`).at(3)
      star.simulate('mouseEnter')
      expect(wrapper.find(`.${style['star--enabled']}`).length).to.eq(4);
    })
    it('all stars following the current hovered star become disabled', () => {
      const wrapper = mount(
        <StarRating
          size={5}
          value={3}
          onChange={() => {}}
        />
      );
      let star = wrapper.find(`.${style['star']}`).at(3)
      star.simulate('mouseEnter')
      expect(wrapper.find(`.${style['star--disabled']}`).length).to.eq(1);
    })
    describe('when a user clicks the star', () => {
      it('the handler function passed into props gets called', () => {
        const onChange = sinon.spy();
        const wrapper = mount(
          <StarRating
            size={5}
            value={3}
            onChange={onChange}
          />
        );
        let star = wrapper.find(`.${style['star']}`).at(4)
        star.simulate('mouseEnter')
        star.simulate('click')
        star.simulate('mouseLeave')
        expect(onChange.calledOnce).to.be.true
      })
    })
  })
});

