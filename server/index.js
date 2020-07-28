// 这里的node代码 babel处理
import React from 'react';
import {renderToString} from 'react-dom/server';
import express from 'express';
import App from '../src/App';

const app = express()

app.get('/',(req,res)=>{
  const Page = <App></App>
  // 把react组件解析成html
  const content = renderToString(Page)
  res.send(`
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>react ssr</title>
    </head>
    <div id="root">${content}</div>
  </html>
  `)
})

app.listen(9093,()=>{
  console.log('服务启动');
})