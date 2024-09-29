import { Layout } from "@/router/layout";
import { Document } from "@element-plus/icons-vue";
import microAppSetting from "@/settings/microAppSetting";

export default {
  path: "/appFirst",
  name: "appFirst",
  component: Layout,
  order: 1,
  hidden: false,
  meta: {
    title: "子应用A",
    hideBreadcrumb: false,
    icon: Document,
    microAppOptions: microAppSetting.subAppConfigs!["appFirst"]
  }
};
