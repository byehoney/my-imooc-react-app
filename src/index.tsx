import React from 'react';
import ReactDOM from 'react-dom/client';
import { loadDevTools } from 'jira-dev-tool';
import './index.css';
import 'antd/dist/reset.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProviders } from 'context';
import { Button, ConfigProvider } from 'antd';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
loadDevTools(()=>{
  root.render(
    <React.StrictMode>
      <ConfigProvider
          theme={{
            token:{
              colorPrimary:'#00b96b'
            },
            components:{
              Button:{
                colorPrimary:'#00b96b',
                colorText:'#000',
                colorPrimaryActive:'#000'
              }
            }
          }}
        >
          <AppProviders>
            <App />
          </AppProviders>
          <Button type='primary'>333</Button>
        </ConfigProvider>
    </React.StrictMode>
  );
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
