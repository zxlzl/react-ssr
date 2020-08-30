// 模拟接口

const express = require('express')

const app = express()

app.get('/api/course/list',(req,res)=>{
  // 支持跨域调用
  res.header('Access-Control-Allow-Origin','*'),
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'),
  res.header('Content-Type','application/json;charset=utf-8'),
  res.json({
    code: 0,
    list: [
      {name: '语文',id: 1},
      {name: '数学',id: 2},
      {name: '英语',id: 3},
      {name: '物理',id: 4},
      {name: '化学',id: 5},
    ]
  })
})

app.listen(9090,()=>{
  console.log('mock启动完毕');
})