import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import MySkill from './pages/Myskill/Myskill';
import Contact from './pages/Contact/Contact';
import Portofolio from './pages/Portofolio/portofolio';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Contact/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
