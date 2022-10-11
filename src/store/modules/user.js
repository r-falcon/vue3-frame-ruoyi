import { login, logout, getInfo } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";
import defAva from "@/assets/images/profile.jpg";

const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    // name: "",
    // avatar: "",
    user: [],
    roles: [],
    permissions: [],
  }),
  actions: {
    // 登录
    login(userInfo) {
      const username = userInfo.username.trim();
      const password = userInfo.password;
      // const code = userInfo.code;
      // const uuid = userInfo.uuid;
      return new Promise((resolve, reject) => {
        login({ username: username, password: password })
          .then((res) => {
            console.log(111, res);
            setToken(res.data.token);
            this.token = res.data.token;
            resolve();
          })
          .catch((error) => {
            console.log(222, error);
            reject(error);
          });
      });
    },
    // 获取用户信息
    getInfo() {
      return new Promise((resolve, reject) => {
        // getInfo()
        //   .then((res) => {
        // const user = res.user;
        // const avatar =
        //   user.avatar == "" || user.avatar == null
        //     ? defAva
        //     : import.meta.env.VITE_APP_BASE_API + user.avatar;

        // if (res.roles && res.roles.length > 0) {
        //   // 验证返回的roles是否是一个非空数组
        //   this.roles = res.roles;
        //   this.permissions = res.permissions;
        // } else {
        //   this.roles = ["ROLE_DEFAULT"];
        // }
        // this.name = user.userName;
        // this.avatar = avatar;
        const res = {
          user: {
            userName: "falcon",
            nickName: "xiaodai Rong",
            phonenumber: "15673239790",
            email: "falcon@126.com",
            dept: "产业互联网事业部/研发中心",
            sex: "1", //0男 1女
            roleGroup: "Web开发",
            createTime: "2021-11-16 14:20:00",
            avatar: "",
          },
          roles: ["admin"],
          permissions: ["create", "update", "delete", "retrieve"],
        };
        const user = res.user;
        user.avatar =
          user.avatar == "" || user.avatar == null
            ? defAva
            : import.meta.env.VITE_APP_BASE_API + user.avatar;
        if (res.roles && res.roles.length > 0) {
          // 验证返回的roles是否是一个非空数组
          this.roles = res.roles;
          this.permissions = res.permissions;
        } else {
          this.roles = ["ROLE_DEFAULT"];
        }
        this.user = user;
        resolve(res);
        // })
        // .catch((error) => {
        //   reject(error);
        // });
      });
    },
    // 退出系统-请求接口
    // logOut() {
    //   return new Promise((resolve, reject) => {
    //     logout(this.token)
    //       .then(() => {
    //         this.token = "";
    //         this.roles = [];
    //         this.permissions = [];
    //         removeToken();
    //         resolve();
    //       })
    //       .catch((error) => {
    //         reject(error);
    //       });
    //   });
    // },

    // 退出系统-不请求接口
    logOut() {
      return new Promise((resolve, reject) => {
        this.token = "";
        this.roles = [];
        this.permissions = [];
        removeToken();
        resolve();
      });
    },
  },
});

export default useUserStore;
