import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from './web/RouterApp';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import './App.css';

const alertOption = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
};

const AlertTemplate = ({ style, options, message, close }) => (
  <div style={style}>
    {options.type === 'info' && '!'}
    {options.type === 'success' && ':)'}
    {options.type === 'error' && ':('}
    {message}
    <button onClick={close}>X</button>
  </div>
)

const App: React.FC = () => {
  return (
    <AlertProvider template={AlertTemplate} {...alertOption}>
      <div className="App">
        <BrowserRouter>
          <RouterApp />
        </BrowserRouter>
      </div>
    </AlertProvider>
  );
}

export default App;
