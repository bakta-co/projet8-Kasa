import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronUp);
library.add(faChevronDown);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />,
);


