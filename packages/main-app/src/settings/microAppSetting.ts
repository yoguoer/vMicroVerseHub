const env = import.meta.env.MODE;

const microAppUrl = {
  appFirst: {
    development: "http://localhost:3000/#/",
    test: "https://test.example.com/vivien/appFirst/",
    production: "https://www.example.com/vivien/appFirst/"
  },
  appSecond: {
    development: "http://localhost:4000/#/",
    test: "https://test.example.com/vivien/appSecond/",
    production: "https://www.example.com/vivien/appSecond/"
  }
};

const microAppSetting = {
  projectName: "mainApp",
  subAppConfigs: {
    appFirst: {
      name: "appFirst",
      url: microAppUrl["appFirst"][env],
      "keep-alive": true
    },
    appSecond: {
      name: "appSecond",
      url: microAppUrl["appSecond"][env],
      "keep-alive": true
    }
  },
  isBaseApp: true, // 标记当前应用为主应用
  basePath: "/", // 打包路径或其他基础路径
  disableSandbox: false, // 是否禁用沙箱
  iframe: true, // 是否使用 iframe
  lifeCycles: {
    created(e, appName) {
      console.log(`===子应用${appName}被创建===`);
    },
    beforemount(e, appName) {
      console.log(`===子应用${appName}即将渲染===`);
    },
    mounted(e, appName) {
      console.log(`===子应用${appName}已经渲染完成===`, e);
    },
    unmount(e, appName) {
      console.log(`===子应用${appName}已经卸载===`);
    },
    error(e, appName) {
      console.log(`===子应用${appName}加载出错===`);
    }
  }
};

export default microAppSetting;
export { microAppUrl };
