import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './weather'; // Assuming 'weather' component is defined in 'Weather.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Weather/>); // Render the Weather component
