import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/store";

import routes from "../src/App";

const page = (
  <Provider store={store}>
    <BrowserRouter>
    {/* {App} */}
    {routes.map(route=><Route {...route}></Route>)}
    </BrowserRouter>
  </Provider>
);

// 注水 客户端入口
ReactDom.hydrate(page, document.getElementById("root"));
