// 这里的node代码 babel处理
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import { StaticRouter, matchPath } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";
import routes from "../src/App";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  // 获取根据路由渲染出的组件，并且拿到loadData方法 获取数据

  // 存储网络请求
  const promises = [];

  routes.some((route) => {
    const match = matchPath(req.path, route);
    if (match) {
      const { loadData } = route.component;
      if (loadData) {
        promises.push(loadData(store));
      }
    }
  });

  // 等待所有网络请求结束渲染
  Promise.all(promises).then(() => {
    // 把react组件解析成html
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          {/* {App} */}
          {routes.map(route=><Route {...route}></Route>)}
          </StaticRouter>
      </Provider>
    );
    // 字符串模板
    res.send(`
  <html>
    <head>
      <meta charset="utf-8"/>
      <title>react ssr</title>
    </head>
    <div id="root">${content}</div>
    <script>
      window.__context = ${}
    </script>
    <script src="/bundle.js"></script>
  </html>
  `);

  });


});

app.listen(9093, () => {
  console.log("服务启动");
});
