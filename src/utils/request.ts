import Taro from '@tarojs/taro';

export interface RequestOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: Record<string, any>;
  headers?: Record<string, string>;
  timeout?: number;
}

const BASE_URL = 'https://wxt.cenaclefeng.com:42015';
const DEFAULT_TIMEOUT = 10000;

const request = async <T = any>(options: RequestOptions): Promise<T> => {
  const { url, method = 'GET', data, headers = {}, timeout = DEFAULT_TIMEOUT } = options;

  try {
    const response = await Taro.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${wx.getStorageSync('token')}`,
        ...headers,
      },
      timeout,
    });

    const { statusCode, data: responseData } = response;

    if (statusCode >= 200 && statusCode < 300) {
      return responseData as T;
    } else {
      throw new Error(`HTTP Error: ${statusCode} - ${responseData?.message || '请求失败'}`);
    }
  } catch (error) {
    console.error('Request Error:', error);
    Taro.showToast({
      title: '网络异常，请稍后再试',
      icon: 'none',
    });
    throw error;
  }
};

export default request;