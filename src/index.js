import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import injectTapEventPLugin from 'react-tap-event-plugin';
import flexboxgrid from 'flexboxgrid/dist/flexboxgrid.css';


injectTapEventPLugin();
render(<App />, document.getElementById('root'));
