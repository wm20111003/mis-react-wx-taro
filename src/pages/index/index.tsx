import React from 'react';
import { Cell, Grid, Divider, Button } from '@nutui/nutui-react-taro';
import { Gift, Category, User, Setting, Cart, Calendar } from '@nutui/icons-react-taro'

const MisHome = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* 头部导航 */}
      <div style={{ backgroundColor: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '20px', margin: '0', color: '#333' }}>管理系统</h1>
        <div style={{ fontSize: '14px', color: '#999' }}>欢迎回来，管理员</div>
      </div>

      {/* 快速操作 */}
      <div style={{ backgroundColor: '#fff', marginTop: '10px', padding: '15px' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
          快速操作
        </div>
        <Grid columns={4}>
          <Grid.Item>
            <Setting width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>用户管理</div>
          </Grid.Item>
          <Grid.Item>
            <Cart width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>订单管理</div>
          </Grid.Item>
          <Grid.Item>
            <Setting width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>系统设置</div>
          </Grid.Item>
          <Grid.Item>
            <Calendar width={30} height={30} />
            <div style={{ marginTop: '5px', fontSize: '14px' }}>报表分析</div>
          </Grid.Item>
        </Grid>
      </div>

      {/* 数据概览 */}
      <div style={{ backgroundColor: '#fff', marginTop: '10px', padding: '15px' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
          数据概览
        </div>
        <Grid columns={3}>
          <Grid.Item>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>120</div>
            <div style={{ marginTop: '5px', fontSize: '14px', color: '#999' }}>新增用户</div>
          </Grid.Item>
          <Grid.Item>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>45</div>
            <div style={{ marginTop: '5px', fontSize: '14px', color: '#999' }}>待处理订单</div>
          </Grid.Item>
          <Grid.Item>
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>89%</div>
            <div style={{ marginTop: '5px', fontSize: '14px', color: '#999' }}>系统健康度</div>
          </Grid.Item>
        </Grid>
      </div>

      {/* 功能入口 */}
      <div style={{ backgroundColor: '#fff', marginTop: '10px' }}>
        <Cell
          title="用户管理"
          description="查看和管理系统用户"
          onClick={() => console.log('跳转到用户管理')}
        />
        <Divider />
        <Cell
          title="订单管理"
          description="处理客户订单"
          onClick={() => console.log('跳转到订单管理')}
        />
        <Divider />
        <Cell
          title="系统设置"
          description="调整系统参数"
          onClick={() => console.log('跳转到系统设置')}
        />
      </div>
    </div>
  );
};

export default MisHome;