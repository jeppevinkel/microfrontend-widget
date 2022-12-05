import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

window.Widget = {
  render: (containerId) => {
    window.Widget.root = ReactDOM.createRoot(document.getElementById(containerId))
    window.Widget.root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  },
  unmount: () => {
    window.Widget.root.unmount()
  }
}

// window.renderWidget = (containerId, history) => {
//   const root = ReactDOM.createRoot(document.getElementById(containerId));
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
//   // unregister();
// };

// window.unmountWidget = containerId => {
//   ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
// };