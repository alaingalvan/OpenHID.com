import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './app';
import './css';

const app = <BrowserRouter>{App}</BrowserRouter>;

render(app, document.getElementById('app'));
