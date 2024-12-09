import request from '../utils/request';


export const userLogin = async (formData: Record<string, any>) => {
    try {
        const response = await request({
            url: '/v1/login/UserLogin',
            method: 'POST',
            data: formData,
        });
        return response
    } catch (error) {
        console.error('表单提交失败:', error);
    }
};