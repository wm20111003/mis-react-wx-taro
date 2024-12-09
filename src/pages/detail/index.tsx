import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { Button, SafeArea } from "@nutui/nutui-react-taro"

import './index.scss'
import { fetchMenuList } from '../../api/menu'

function Index() {
  const [menus, setMenus] = useState([])
  useEffect(() => {
    return () => {
      console.log('component unmounted')
    }
  }, [])


  return (
    <View className="menu-page-container">
      详情      
    </View>
  )
}

export default Index
