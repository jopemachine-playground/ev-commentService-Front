import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './web/RouterApp';
import { UseSessionProvider } from 'react-session-hook';
import './App.css';

const App: React.FC = () => {
  return (
  <UseSessionProvider>
    <div className="App">
      <BrowserRouter>
      <RouterApp />
     </BrowserRouter>
    </div>
  </UseSessionProvider>
  );
}

export default App;
