
# SCMQ 多项目启动管理


[![NPM version](https://img.shields.io/npm/v/scmq.svg?style=flat)](https://npmjs.org/package/scmq)
[![NPM downloads](http://img.shields.io/npm/dm/scmq.svg?style=flat)](https://npmjs.org/package/scmq)

---

## 特性

* **快速便捷**:  只需要一次配置，之后一键启动！
* **灵活配置**:  自定义项目目录和启动模式，什么项目都能启！
* **分组管理**:  分组化管理，启动清晰便捷又方便管理！
* **绝不干扰**:  不会干扰任何原先的启动特性！
## Install

## 安装

```bash
npm install scmq -g
```
## 使用
### 在 cmd/PowerShell... (Windows系统下)
当你有两个项目需要同时启动
```javascript
// 查看所有配置项（第一次应该是没有任何配置项的）
scmq list
// 增加一个启动组，名为G1   
scmq add g G1
// 给启动组G1增加一个项目 项目名: p1, 项目目录: D:\p1 , 运行命令: npm start
scmq add G1 p1 D:\p1 "npm start"
// 给启动组G1增加第二个项目 项目名: p2, 项目目录: D:\p2 , 运行命令: npm start
scmq add G1 p2 D:\p2 "npm start"
// 启动吧！
scmq
```
当你有三个项目想要分配到两个启动组中时
```javascript
// 查看所有配置项
scmq list
// 增加一个启动组，名为G1   
scmq add g G1
// 给启动组G1增加一个项目 项目名: p1, 项目目录: D:\p1 , 运行命令: npm start
scmq add G1 p1 D:\p1 "npm start"
// 给启动组G1增加第二个项目 项目名: p2, 项目目录: D:\p2 , 运行命令: npm start
scmq add G1 p2 D:\p2 "npm start"
// 增加第二个启动组，名为G2       
scmq add g G2
// 给启动组G2增加一个项目 项目名: p3, 项目目录: D:\p3 , 运行命令: npm start
scmq add G2 p3 D:\p3 "npm start"
// 启动G2！
scmq start G2
// 这条命令会启动G1
scmq
```
当你完成了配置，下一次想要运行时（再也不用配置啦）
```javascript
// 启动G1
scmq
// 这条也会启动G1
scmq start G1
// 设置默认启动G2
scmq use G2
// 现在这条就会默认启动G2了
scmq 
```
## API
### scmq list
* **查看配置**: 查看所有配置项
### scmq add <1> <2> <3> <4>
如果 <1> 是 "group" 或 "g", 会增加一个启动组，此时命令为：
* **scmq add group <1>**
* **<1>** 组名，不允许重复
* **例子**: scmq add group G1 // 增加一个名为G1的组

如果 <1> 不是 "group" 或 "g", 会增加一个项目，此时命令为：
* **scmq add <1> <2> <3> <4>** 
* **<1>** 项目所在组名
* **<2>** 项目名，在该组下不可重复
* **<3>** 项目目录
* **<4>** 项目启动命令
* **example**: scmq add G1 p1 D:\p1 "npm start" // 给启动组G1增加一个项目 项目名: p1, 项目目录: D:\p1 , 运行命令: npm start
### scmq & scmq start / run 
* **scmq start <1>**
* **<1>** 选填，如果不填，则会启动默认的组（如果没有指定则会启动第一个）
### scmq use
* **scmq use <1>**
* **<1>** 设置默认组，必须是存在的组名
### scmq remove <1> <2> <3> <4>
如果 <1> 是 "group" 或 "g", 会删除一个启动组，此时命令为：
* **scmq remove group <1>**
* **<1>** 组名，该组必须存在。
* **example**: scmq remove group G1 // 删除一个名为G1的组

如果 <1> 不是 "group" 或 "g", 会删除一个项目，此时命令为：
* **scmq remove <1> <2>** 
* **<1>** 项目所在组名
* **<2>** 项目名
* **example**: scmq remove G1 p1 // 删除启动组G1下的p1项目
### scmq version
* **version**: 查看版本
