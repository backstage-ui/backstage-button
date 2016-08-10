import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  it('should accept className', () => {
    const wrapper = shallow(<Button className='foo' />);
    expect(wrapper.hasClass('foo')).toBe(true);
  });
});