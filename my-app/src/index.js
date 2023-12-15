import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/projects/19/App.js'
import 'src/projects/19/index.css'
// import { AppCtxProvider } from 'src/projects/13/app_ctx.js';
import {FormCtxProvider} from 'src/projects/19/FormCtx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppCtxProvider> */}
    <FormCtxProvider>
      <App />
    </FormCtxProvider>
    {/* </AppCtxProvider> */}
  </React.StrictMode>
);
