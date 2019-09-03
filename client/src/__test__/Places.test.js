import React from 'react';
import { shallow } from 'enzyme';
import Places from '../components/Places';
import PlacesEntry from '../components/PlacesEntry';
import placesData from './placesData';
import { exportAllDeclaration } from '@babel/types';
describe('Should render component Places', () => {
  const places = shallow(<Places />);
  places.setState({
    places: placesData,
    index: 0,
    direction: '',
    key: ''
  })

  it('renders without crashing', () => {
    expect(places.not.toBeUndefined);
  });
  it('should render component Places', () => {
    expect(places.find(PlacesEntry).length).toBe(12);
  })
});