import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import injectTapEventPLugin from 'react-tap-event-plugin';
import 'flexboxgrid';
import store from './store';


// injectTapEventPLugin();
render(
    (<Provider store={store}>
        <App />
    </Provider>),
    document.getElementById('root')
);
