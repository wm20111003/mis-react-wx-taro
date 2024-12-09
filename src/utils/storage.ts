
export const local = {
    setVal(key: string, value: string) {
        wx.setStorageSync(key, value);
    },
    getVal(key: string) {
        return wx.getStorageSync(key);
    },
    remove(key: string) {
        wx.removeStorageSync(key);
    }
}
