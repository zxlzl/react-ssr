import React, { useState } from "react";

function Index(props) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>hello {props.name}</h1>
      <div>count值：{count}</div>
      <button onClick={() => setCount((count+10000))}>累加</button>
    </div>
  );
}

export default Index;
