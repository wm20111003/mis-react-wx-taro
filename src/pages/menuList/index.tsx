import Taro, { useLoad } from '@tarojs/taro';
import React, { useEffect, useState } from 'react'
import { Button, SafeArea } from "@nutui/nutui-react-taro"
import { View, Text } from '@tarojs/components';

import './index.scss'
import { fetchMisList } from '../../api/menu'

function Index() {
  const [rowItems, setRowItems] = useState([])

  const EditClassMap = {
    view: View,
    label: Text,
    xuLabel: Text
  };

  const transformStyle = (style) => {
    if (!style) return {};
    const convertedStyle = {};
    for (const key in style) {
      // 移除不支持的样式键名
      if (key.endsWith('xxx') || key.endsWith('XX')) continue;
      // 转换为 React 支持的样式键名
      const newKey = key.replace(/x$/, '');
      convertedStyle[newKey] = style[key];
    }
    return convertedStyle;
  };

  const RenderComponent = ({ items }) => {
    return items.map((item, index) => {
      const Component = EditClassMap[item.EditClass] || View; // 默认为 View
      const style = transformStyle(item.style);
  
      return (
        <Component key={item.key || index} style={style}>
          {item.editItems && <RenderComponent items={item.editItems} />}
          {item.Caption && <Text style={item.textstyle}>{item.Caption}</Text>}
        </Component>
      );
    });
  };

  const fetchMisListById = async (classid) => {
   const res = await fetchMisList({ ObjectClassID: classid })
    if (res.code == 200) {
      setRowItems(res.data.GridListDef.rowItems);
      wx.setNavigationBarTitle({
        title: res.data.Title
      })
    }
  }

  useLoad((options) => {
    console.log('页面加载时的参数:', options);
    fetchMisListById(options.classid)
  });

  return (
    <View className="menu-page-container">
      <RenderComponent items={rowItems} />
    </View>
  )
}

export default Index
