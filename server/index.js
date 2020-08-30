// 这里的node代码 babel处理
import React from 'react';
import {renderToString} from 'react-dom/server';
import express from 'express';
import App from '../src/App';
import { StaticRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "../src/store/store";

const app = express()

app.use(express.static("public"))

app.get('*',(req,res)=>{
  // const Page = <App name="zxl"></App>
  // 把react组件解析成html
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
      {App}
    </StaticRouter>
    </Provider>
    
  )
  res.send(`
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>react ssr</title>
    </head>
    <div id="root">${content}</div>
    <script src="/bundle.js"></script>
  </html>
  `)
})

app.listen(9093,()=>{
  console.log('服务启动');
})