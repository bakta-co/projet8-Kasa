import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Importez le cœur de FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';

// Importez les icônes que vous souhaitez utiliser (par exemple, faCoffee)
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronUp);
library.add(faChevronDown);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />,
);


