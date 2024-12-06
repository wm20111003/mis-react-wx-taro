import React from 'react';
import { Avatar, Button, Cell, Divider, Grid } from '@nutui/nutui-react-taro';
import { Gift, Category, User } from '@nutui/icons-react-taro'
import '@nutui/nutui-react-taro/dist/style.css';

const MemberCenter = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* 顶部会员信息 */}
      <div style={{ backgroundColor: '#fff', padding: '20px', textAlign: 'center' }}>
        <Avatar
          size="large"
          src="https://img.icons8.com/color/96/000000/user.png"
        />
        <div style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
          张三
        </div>
        <div style={{ color: '#999', fontSize: '14px' }}>会员编号：123456789</div>
        <Button
          type="primary"
          size="small"
          style={{ marginTop: '15px', borderRadius: '20px' }}
        >
          升级会员
        </Button>
      </div>

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