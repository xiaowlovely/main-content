import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import Places from '../components/Places';
import Todos from '../components/Todos';
import { exportAllDeclaration } from '@babel/types';
describe('Should render component App', () => {
   const app = shallow(<App />);
   it('renders without crashing', () => {
      expect(app.not.toBeUndefined);
   });
   it('should render the component Places and Todos', ()=>{
      expect(app.find(Places).length).toBe(1);
      expect(app.find(Todos).length).toBe(1);
   })
});