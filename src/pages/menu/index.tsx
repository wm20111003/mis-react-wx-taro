import React from 'react'
import { View } from '@tarojs/components'
import { Button, SafeArea } from "@nutui/nutui-react-taro"

import './index.scss'

function Index() {
  return (
    <View className="page-container">
      <View className="index">
       行政与人力资源
      </View>
      <View className="index">
        <Button type="primary" className="btn">
          差旅报销
        </Button>
      </View>

        <SafeArea position="bottom" />
    </View>
  )
}

export default Index
