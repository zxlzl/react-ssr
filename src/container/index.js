import React, { useState,useEffect } from "react";
import {getIndexList} from '../store/index';
import {connect} from 'react-redux';

function Index(props) {
  const [count, setCount] = useState(1);
  // useEffect(()=>{
  //   props.getIndexList()
  // },[])
  return (
    <div>
      <h1>hello {props.name}</h1>
      <div>count值：{count}</div>
      <button onClick={() => setCount((count+10000))}>累加</button>
      <hr/>
      <ul>
        {props.list.map(item=>{
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  );
}


Index.loadData = (store) => {
  return store.dispatch(getIndexList())
}
export default connect(state=>({list:state.index.list}),{getIndexList})(Index)
