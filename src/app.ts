import React, { useEffect } from 'react'
import { Provider } from 'mobx-react';
import { useDidShow, useDidHide } from '@tarojs/taro'
import { StoreContext } from './stores/storeContext'
// 全局样式
import '@nutui/nutui-react-taro/dist/style.css';
import './app.scss'

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    var sysInfo = wx.getSystemInfoSync();
        console.log(sysInfo);
        wx.setStorageSync('systemInfo', JSON.stringify(sysInfo));
  },[])

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  // return (
  //   <StoreContext.Provider value={{ counterStore }}>
  //     {props.children}
  //   </StoreContext.Provider>
  // );
  return props.children
}

export default App
