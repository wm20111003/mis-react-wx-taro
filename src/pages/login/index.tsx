import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Input, Button, Toast, Form } from '@nutui/nutui-react-taro';
import { userLogin } from '../../api/user';
import { local } from '../../utils/storage';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [toastContent, setToastContent] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setToastContent("用户名或密码不能为空")
      setToastVisible(true);
      return;
    }
    const { code, data, msg } = await userLogin({
      sLN: username,
      sPW: password
    })
    if (code == 200) {
      console.log('**>', data)
      local.setVal('token', data.token);
      local.setVal('userinfo', JSON.stringify(data.userInfo))

      Taro.navigateBack()
    } else {
      setToastContent(msg)
      setToastVisible(true);
    }
  };

  return (
    <View style={{ padding: '20px' }}>
      <Input
        placeholder="请输入用户名"
        value={username}
        onChange={(value) => setUsername(value)}
      />
      <Input
        type="password"
        placeholder="请输入密码"
        value={password}
        onChange={(value) => setPassword(value)}
        style={{ marginTop: '20px' }}
      />
      <Button
        type="primary"
        block
        style={{ marginTop: '30px' }}
        onClick={handleLogin}
      >
        登录
      </Button>

      <Toast
        visible={toastVisible}
        content={toastContent}
        onClose={() => setToastVisible(false)}
      />
    </View>
  );
};

export default LoginPage;