import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root
root.render(<App />); // Render your App component
