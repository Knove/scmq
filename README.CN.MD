
# SCMQ 项目快速启动


[![NPM version](https://img.shields.io/npm/v/scmq.svg?style=flat)](https://npmjs.org/package/scmq)
[![NPM downloads](http://img.shields.io/npm/dm/scmq.svg?style=flat)](https://npmjs.org/package/scmq)

FOR Node.js
---

## 特性

* **自定义配置**:  可以不通过文件夹方式，快速进行项目启动
* **快速！**: 配置好环境后，一键启动！

## 安装

```bash
npm install scmq -g
```
## 使用
### On cmd/PowerShell... (Windows)

```javascript
scmq config-set dir1 D:\xxx\merchants          // 设置merchants项目目录
scmq config-set dir2 D:\xxx\cloud-account_scm  // 设置cloud-account_scm目录
scmq config-set type dev                       // 指定后端是dev环境还是tst环境
scmq config                                    // 查看配置项
scmq go                                        // 启动！
```
## API
### scmq config
* **查看config**: 查看所有的设置 , 包括 dir1(merchants项目目录), dir2(cloud-account_scm目录), type(后端是dev环境还是tst环境)
### scmq config-set
* **设置config**: 设置config , 目前包括可以设置 : dir1, dir2, type.
type中，只有以下三个可选项 [dev, tst, test]
* **例子**: scmq config-set dir1 D:/choice/merchants
### scmq go
* **启动!**: 启动！但是必须先配置好config
### scmq version
* **version**: 查看版本
