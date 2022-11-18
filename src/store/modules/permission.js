// import auth from "@/plugins/auth";
// import router, { constantRoutes, dynamicRoutes } from "@/router";
import { constantRoutes } from "@/router";
// import { getRouters } from '@/api/menu'
import Layout from "@/layout/index";
// import ParentView from "@/components/ParentView";
// import InnerLink from "@/layout/components/InnerLink";

// 匹配views里面所有的.vue文件
const modules = import.meta.glob("./../../views/**/*.vue");

const usePermissionStore = defineStore("permission", {
  state: () => ({
    routes: [],
    addRoutes: [],
    // defaultRoutes: [],
    // topbarRouters: [],
    // sidebarRouters: []
  }),
  actions: {
    setRoutes(routes) {
      this.addRoutes = routes;
      this.routes = constantRoutes.concat(routes);
    },
    // setDefaultRoutes(routes) {
    //   this.defaultRoutes = constantRoutes.concat(routes)
    // },
    // setTopbarRoutes(routes) {
    //   this.topbarRouters = routes
    // },
    // setSidebarRouters(routes) {
    //   this.sidebarRouters = routes
    // },
    generateRoutes(roles) {
      return new Promise((resolve) => {
        // 向后端请求路由数据
        // getRouters().then(res => {
        //   const sdata = JSON.parse(JSON.stringify(res.data))
        //   const rdata = JSON.parse(JSON.stringify(res.data))
        //   const defaultData = JSON.parse(JSON.stringify(res.data))
        //   const sidebarRoutes = filterAsyncRouter(sdata)
        //   const rewriteRoutes = filterAsyncRouter(rdata, false, true)
        //   const defaultRoutes = filterAsyncRouter(defaultData)
        //   const asyncRoutes = filterDynamicRoutes(dynamicRoutes)
        //   asyncRoutes.forEach(route => { router.addRoute(route) })
        //   this.setRoutes(rewriteRoutes)
        //   this.setSidebarRouters(constantRoutes.concat(sidebarRoutes))
        //   this.setDefaultRoutes(sidebarRoutes)
        //   this.setTopbarRoutes(defaultRoutes)
        //   resolve(rewriteRoutes)
        // })
        var res = {
          meta: {
            msg: "获取成功",
            status: 200,
          },
          data: [
            // 系统管理
            // {
            //   name: "System",
            //   path: "/system",
            //   redirect: null,
            //   component: "Layout",
            //   meta: {
            //     title: "系统管理",
            //     icon: null,
            //     roles: ["user"],
            //   },
            //   children: [
            //     {
            //       name: "User",
            //       path: "user",
            //       redirect: null,
            //       component: "system/user/index",
            //       hidden: false,
            //       meta: {
            //         title: "用户管理",
            //         icon: null,
            //       },
            //     },
            //     {
            //       name: "Role",
            //       path: "role",
            //       redirect: null,
            //       component: "system/role/index",
            //       hidden: false,
            //       meta: {
            //         title: "角色管理",
            //         icon: null,
            //       },
            //     },
            //     {
            //       name: "menu",
            //       path: "Menu",
            //       redirect: null,
            //       component: "system/menu/index",
            //       hidden: false,
            //       meta: {
            //         title: "菜单管理",
            //         icon: null,
            //       },
            //     },
            //   ],
            // },

            // 基础知识
            {
              name: "Basic",
              path: "/basic",
              redirect: null,
              component: "Layout",
              meta: {
                title: "基础知识",
                icon: null,
                roles: ["user"],
              },
              children: [
                {
                  name: "Setup",
                  path: "setup",
                  redirect: null,
                  component: "basic/setup/index",
                  hidden: false,
                  meta: {
                    title: "setup 函数",
                    icon: null,
                  },
                },
                {
                  name: "Variable",
                  path: "variable",
                  redirect: null,
                  component: "basic/variable/index",
                  hidden: false,
                  meta: {
                    title: "变量",
                    icon: null,
                  },
                },
                {
                  name: "LifeCircle",
                  path: "lifecircle",
                  redirect: null,
                  component: "basic/lifecircle/index",
                  hidden: false,
                  meta: {
                    title: "钩子函数",
                    icon: null,
                  },
                },
                {
                  name: "Watch",
                  path: "watch",
                  redirect: null,
                  component: "basic/watch/index",
                  hidden: false,
                  meta: {
                    title: "watch 监听",
                    icon: null,
                  },
                },
                {
                  name: "Computed",
                  path: "computed",
                  redirect: null,
                  component: "basic/computed/index",
                  hidden: false,
                  meta: {
                    title: "computed 函数",
                    icon: null,
                  },
                },
                {
                  name: "Fragment",
                  path: "fragment",
                  redirect: null,
                  component: "basic/fragment/index",
                  hidden: false,
                  meta: {
                    title: "fragment 片段",
                    icon: null,
                  },
                },
                {
                  name: "Teleport",
                  path: "teleport",
                  redirect: null,
                  component: "basic/teleport/index",
                  hidden: false,
                  meta: {
                    title: "teleport 弹框",
                    icon: null,
                  },
                },
                {
                  name: "Suspense",
                  path: "suspense",
                  redirect: null,
                  component: "basic/suspense/index",
                  hidden: false,
                  meta: {
                    title: "suspense 异步加载处理",
                    icon: null,
                  },
                },
                {
                  name: "Pinia",
                  path: "pinia",
                  redirect: null,
                  component: "basic/pinia/index",
                  hidden: false,
                  meta: {
                    title: "pinia 状态管理",
                    icon: null,
                  },
                },
                {
                  name: "DefineHooks",
                  path: "defineHooks",
                  redirect: null,
                  component: "basic/defineHooks/index",
                  hidden: false,
                  meta: {
                    title: "可组合函数",
                    icon: null,
                  },
                },
                {
                  name: "AsyncComponent",
                  path: "asyncComponent",
                  redirect: null,
                  component: "basic/asyncComponent/index",
                  hidden: false,
                  meta: {
                    title: "懒加载组件",
                    icon: null,
                  },
                },
                {
                  name: "Slot",
                  path: "slot",
                  redirect: null,
                  component: "basic/slot/index",
                  hidden: false,
                  meta: {
                    title: "插槽",
                    icon: null,
                  },
                },
                {
                  name: "Directive",
                  path: "directive",
                  redirect: null,
                  component: "basic/directive/index",
                  hidden: false,
                  meta: {
                    title: "自定义指令",
                    icon: null,
                  },
                },
              ],
            },

            // 功能操作
            {
              name: "Options",
              path: "/options",
              redirect: null,
              component: "Layout",
              meta: {
                title: "功能操作",
                icon: null,
                roles: ["user"],
              },
              children: [
                // {
                //   name: "Test",
                //   path: "test",
                //   redirect: null,
                //   component: "options/test/index",
                //   hidden: false,
                //   meta: {
                //     title: "操作测试",
                //     icon: null,
                //   },
                // },
              ],
            },
          ],
        };
        const accessedRoutes = filterAsyncRouter(res.data);
        accessedRoutes.push({
          path: "/:catchAll(.*)",
          redirect: "/404",
          hidden: true,
          meta: { roles: ["admin"] },
        });
        this.setRoutes(accessedRoutes);
        resolve(accessedRoutes);
      });
    },
  },
});

// 遍历后台传来的路由字符串，转换为组件对象
export function filterAsyncRouter(asyncRouterMap) {
  return asyncRouterMap.filter((route) => {
    if (route.component) {
      // Layout组件特殊处理
      if (route.component === "Layout") {
        route.component = Layout;
      } else {
        route.component = loadView(route.component);
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    }
    return true;
  });
}

// function filterAsyncRouter(asyncRouterMap, lastRouter = false, type = false) {
//   return asyncRouterMap.filter((route) => {
//     if (type && route.children) {
//       route.children = filterChildren(route.children);
//     }
//     if (route.component) {
//       // Layout ParentView 组件特殊处理
//       if (route.component === "Layout") {
//         route.component = Layout;
//       } else if (route.component === "ParentView") {
//         route.component = ParentView;
//       } else if (route.component === "InnerLink") {
//         route.component = InnerLink;
//       } else {
//         route.component = loadView(route.component);
//       }
//     }
//     if (route.children != null && route.children && route.children.length) {
//       route.children = filterAsyncRouter(route.children, route, type);
//     } else {
//       delete route["children"];
//       delete route["redirect"];
//     }
//     return true;
//   });
// }

// function filterChildren(childrenMap, lastRouter = false) {
//   var children = [];
//   childrenMap.forEach((el, index) => {
//     if (el.children && el.children.length) {
//       if (el.component === "ParentView" && !lastRouter) {
//         el.children.forEach((c) => {
//           c.path = el.path + "/" + c.path;
//           if (c.children && c.children.length) {
//             children = children.concat(filterChildren(c.children, c));
//             return;
//           }
//           children.push(c);
//         });
//         return;
//       }
//     }
//     if (lastRouter) {
//       el.path = lastRouter.path + "/" + el.path;
//     }
//     children = children.concat(el);
//   });
//   return children;
// }

// 动态路由遍历，验证是否具备权限
// export function filterDynamicRoutes(routes) {
//   const res = [];
//   routes.forEach((route) => {
//     if (route.permissions) {
//       if (auth.hasPermiOr(route.permissions)) {
//         res.push(route);
//       }
//     } else if (route.roles) {
//       if (auth.hasRoleOr(route.roles)) {
//         res.push(route);
//       }
//     }
//   });
//   return res;
// }

export const loadView = (view) => {
  let res;
  for (const path in modules) {
    const dir = path.split("views/")[1].split(".vue")[0];
    if (dir === view) {
      res = () => modules[path]();
    }
  }
  return res;
};

export default usePermissionStore;
