import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import { Button, SafeArea } from "@nutui/nutui-react-taro"

import './index.scss'
import { fetchMenuList } from '../../api/menu'

function Index() {
  const [menus, setMenus] = useState([])
  useEffect(() => {
    getMenuList()
    return () => {
      console.log('component unmounted')
    }
  }, [])

  const getMenuList = async () => {
    let userInfo = wx.getStorageSync("userinfo")
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
    }
    const menusRes = await fetchMenuList({
      ProgParams: userInfo.sLN,
      ClientType: 3
    })
    if (menusRes?.code === 200) {
      setMenus(menusRes.data)
    }
  }

  const goDetail = (item) => {
    const classId = item.OpenObjectClassID
    if (classId >= 50000 && classId < 59999) {
      Taro.navigateTo({
        url: `/pages/detail/index?classid=${classId}`,
      });
    } else if (classId >= 20000 && classId < 29999){
      Taro.navigateTo({
        url: `/pages/menuList/index?classid=${classId}`,
      });
    }
  }
  return (
    <View className="menu-page-container">
      {
        menus.map((item: any, index) => (
          <>
            <View className="index">
            {item.Name}
            </View>
            {
              item.data?.map((level, idx) => (
                <View className="index">
                  <Button type="primary" className="btn" onClick={goDetail.bind(this, level)}>
                    {level.Name}
                  </Button>
                </View>
              ))
            }
          </>
        ))
      }
      
    </View>
  )
}

export default Index
