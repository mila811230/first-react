import ReactDOM from 'react-dom'
import {App} from './App003'
// const App = () => {
//   return (
//     <p>안녕하세요</p>
//   )
// }
// function App () {
//   const divstyle = {
//     border : '1px solid blue' 
//   }
//   return (
//     <div style={divStyle}>
//       <p>안녕하세요</p>
//       <p>반갑습니다</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>
  </>
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
