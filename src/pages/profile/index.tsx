import Taro from '@tarojs/taro';
import React, { useState } from 'react';
import { Avatar, Button, Cell, Divider, Grid } from '@nutui/nutui-react-taro';
import { Gift, Category, User } from '@nutui/icons-react-taro'
import { useLoad, useDidShow } from '@tarojs/taro';
import { local } from '../../utils/storage';

const MemberCenter = () => {
  const [isLogin, setLogined] = useState(false)
  const [user, setUser] = useState({} as any)

  const toLogin = () => {
    Taro.navigateTo({
      url: '/pages/login/index',
    });
  }

  useLoad((options) => {
    console.log('页面加载时的参数:', options);
  });

  useDidShow(() => {
    const token = local.getVal('token')
    const userinfo = local.getVal('userinfo')
    if (token) {
      setLogined(true)
      setUser(JSON.parse(userinfo))
    }
  })
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingBottom: '50px' }}>
      {
        isLogin ? 
        <div style={{ backgroundColor: '#fff', padding: '20px', textAlign: 'center' }}>
          <Avatar
            size="large"
            src="https://img.icons8.com/color/96/000000/user.png"
          />
          <div style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
            {user.sLoginName}
          </div>
          <div style={{ color: '#999', fontSize: '14px' }}>会员编号：{user.sLN}</div>
        </div> :
        <div style={{ backgroundColor: '#fff', padding: '20px', textAlign: 'center' }}>
          <User width={30} height={30} />
          <div>
            <Button
              type="primary"
              size="small"
              style={{ marginTop: '15px', borderRadius: '20px' }}
              onClick={toLogin}
            >
              去登录
            </Button>
          </div>
        </div>
      }

      {/* 会员权益 */}
      <div style={{ backgroundColor: '#fff', marginTop: '10px', padding: '15px' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
          会员权益
        </div>
        <Grid columns={3}>
          <Grid.Item>
            <Gift width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>专属优惠</div>
          </Grid.Item>
          <Grid.Item>
            <Gift width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>会员礼包</div>
          </Grid.Item>
          <Grid.Item>
          <Gift width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>专属标识</div>
          </Grid.Item>
        </Grid>
      </div>

      {/* 会员特权 */}
      <div style={{ backgroundColor: '#fff', marginTop: '10px', padding: '15px' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
          会员特权
        </div>
        <Grid columns={4}>
          <Grid.Item>
            <Gift width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>专属服务</div>
          </Grid.Item>
          <Grid.Item>
            <Gift width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>优先支持</div>
          </Grid.Item>
          <Grid.Item>
            <Gift width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>积分兑换</div>
          </Grid.Item>
          <Grid.Item>
            <Gift width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>现金返利</div>
          </Grid.Item>
        </Grid>
      </div>

      {/* 操作入口 */}
      <div style={{ backgroundColor: '#fff', marginTop: '10px' }}>
        <Cell
          title="我的订单"
          description="查看全部订单"
          onClick={() => console.log('跳转到订单页面')}
        />
        <Divider />
        <Cell
          title="地址管理"
          onClick={() => console.log('跳转到地址管理')}
        />
        <Divider />
        <Cell
          title="联系客服"
          onClick={() => console.log('跳转到联系客服')}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          type="primary"
          style={{ width: '80%' }}
          onClick={() => console.log('退出系统')}
        >
          退出登录
        </Button>
      </div>
    </div>
  );
};

export default MemberCenter;