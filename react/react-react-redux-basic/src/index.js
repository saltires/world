import React from 'react';
import ReactDOM from 'react-dom';
import './redux/store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    /** 
      正常情况下，使用容器组件时，需要给容器组件传递 store 属性，值为 store，那么如果每个容器组件都这样传递，未免过于麻烦，
      通过 react-redux 传递的 Provider，便不需要再在每一个容器组件上传递 store 了
     */
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * 使用 react-redux 时，以下监测代码无需书写，react-redux 会自动帮我们完成监测操作
 */
// store.subscribe(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
