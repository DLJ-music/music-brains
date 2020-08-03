import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist component', () => {
  let artistInfo;
  beforeEach(() => {
    artistInfo = { id: 'stjkstkjlljst', name: 'Jackson Michael', type: 'Group', score: 87 }
  })

  it('renders Artist', () => {
    const wrapper = shallow(<Artist {...artistInfo}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  