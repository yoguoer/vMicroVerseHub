# vMicroversehub

​	vMicroversehub 是一个使用 v-micro-app-plugin（基于京东推出的 MicroApp，技术栈无关，开箱即用） 搭建的 monorepo 微前端项目框架。

# 目录结构

​	本项目使用 monorepo 的方式组织目录结构，将 packages 作为工作目录，内含三个项目：

| 目录名         | 介绍                         | 是否主应用 |
| -------------- | ---------------------------- | ---------- |
| main-app       | 主应用，提供一个框架给子应用 | 是         |
| sub-app-first  | 子应用1                      | 否         |
| sub-app-second | 子应用2                      | 否         |

