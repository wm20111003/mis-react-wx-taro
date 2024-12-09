import { objectToParams } from '../utils/util';
import request from '../utils/request';

export const fetchMenuList = async (params) => {
  try {
    const response = await request({
      url: `/v1/MIS/getMenuList?${objectToParams(params)}`,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.error('获取失败:', error);
  }
};

export const fetchMisList = async (params) => {
  try {
    const response = await request({
      url: `/v1/MIS/getQueryListDef?${objectToParams(params)}`,
      method: 'GET',
    });
    return response;
  } catch (error) {
    console.error('获取失败:', error);
  }
};