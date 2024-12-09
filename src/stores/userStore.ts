import { makeAutoObservable } from 'mobx';

class UserStore {
  userInfo = {};

  constructor() {
    makeAutoObservable(this);
  }

  setUserInfo(data) {
    this.userInfo = data;
  }

  clear() {
    this.userInfo = {};
  }
}
const userStore = new UserStore();

export default userStore;