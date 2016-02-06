import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import injectTapEventPLugin from 'react-tap-event-plugin';


injectTapEventPLugin();
render(<App />, document.getElementById('root'));
