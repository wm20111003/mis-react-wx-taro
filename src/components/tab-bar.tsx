import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Message, Category, User } from '@nutui/icons-react-taro'

const Demo1 = () => (
  <Tabbar defaultValue={0}>
    <Tabbar.Item
      title="消息"
      icon={<Message width={18} height={18} />}
      value={9}
    />
    <Tabbar.Item title="主菜单" icon={<Category width={18} height={18} />} dot />
    <Tabbar.Item title="我的" icon={<User width={18} height={18} />} />
  </Tabbar>
)

export default Demo1
