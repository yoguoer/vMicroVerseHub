import { Layout } from "@/router/layout";
import { Document } from "@element-plus/icons-vue";
import microAppSetting from "@/settings/microAppSetting";

export default {
  path: "/appSecond",
  name: "appSecond",
  component: Layout,
  order: 2,
  hidden: false,
  meta: {
    title: "appSecond",
    hideBreadcrumb: false,
    icon: Document,
    microAppOptions: microAppSetting.subAppConfigs!["appSecond"]
  }
};
