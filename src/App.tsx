import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './web/RouterApp';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
         <RouterApp />
       </BrowserRouter>
    </div>
  );
}

export default App;
