import React, { TestUtils } from 'react/addons'
import App from '../src/App';


describe('App', () => {

  let component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<App />);
  })

  it('should say true', () => {
    expect(1).toBe(1);
  })

})