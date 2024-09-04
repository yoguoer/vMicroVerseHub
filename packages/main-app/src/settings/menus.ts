export default [
    { title: "子应用A", name: "appFirst" },
    { title: "子应用B", name: "appSecond" },
    {
      title: "其它",
      name: "mainuser",
      children: [
        { title: "mainauth", name: "mainauth" },
        { title: "maingroup", name: "maingroup" },
      ],
    },
    { title: "测试通信", name: "maintestMsg" },
  ]