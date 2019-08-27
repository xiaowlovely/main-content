import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import { exportAllDeclaration } from '@babel/types';
describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      const appTest = shallow(<App />);
      expect(appTest.not.toBeUndefined);
    });
});