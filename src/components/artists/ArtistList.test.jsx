import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from './ArtistList';

describe('ArtistList component', () => {
  let artistListInfo;
  beforeEach(() => {
    artistListInfo = [{ id: 'stjkstkjlljst', name: 'Jackson Michael', type: 'Group', score: 87 }];
  });

  it('renders ArtistList', () => {
    const wrapper = shallow(<ArtistList artists={artistListInfo}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
